

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Boxeadores } from 'src/app/servicios/boxeadores/boxeadores.models';
import { BoxeadoresService } from 'src/app/servicios/boxeadores/boxeadores.service';
import { BoxeadoresRingService } from 'src/app/servicios/boxeadoresRing/boxeadores-ring.service';

@Component({
  selector: 'app-ring',
  templateUrl: './ring.page.html',
  styleUrls: ['./ring.page.scss'],
})
export class RingPage implements OnInit {

  public selectBoxeadores1: Boxeadores | null = null;
  public selectBoxeadores2: Boxeadores | null = null;
  public idBoxeador:string = ''

  public vidasJugador1: number = 100;
  public vidasJugador2: number = 100;

  public danioMinimo: number = 5;
  public danioMaximo: number = 20;
  public danioRecibido1: number = 0;
  public danioRecibido2: number = 0;

  public mensajes: string[] = [];

  constructor(
    private boxeadoresService:BoxeadoresService,
    private boxeadorRingService:BoxeadoresRingService,
    private ar:ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.ar.params.subscribe(params => {
      this.idBoxeador =  params['boxeador'];
      this.seleccionaJugador(this.idBoxeador);
    })

    
  }
  public seleccionaJugador(_id:string) {
    this.boxeadoresService.getBoxeadores().subscribe(boxeadores => {
      const selectBoxeador1 = boxeadores.find(boxeador => boxeador._id === _id);
      this.selectBoxeadores1 = selectBoxeador1 || null;
      console.log('Boxeador selccionado', this.selectBoxeadores1);
    })
    this.selecccionarJugadorAlAzar();
  }

  public selecccionarJugadorAlAzar() {
      this.boxeadoresService.getBoxeadores().subscribe(boxeadores => {
        this.boxeadorRingService.selectBoxeadoresRandom(boxeadores).subscribe(randomBoxeador => {
          if (randomBoxeador !== this.selectBoxeadores1) {
            this.selectBoxeadores2 = randomBoxeador;
            console.log('Boxeador seleccionado al azar', this.selectBoxeadores2);
          } else {
            this.selecccionarJugadorAlAzar();
          }    
        })
      });
  }

    public pegar() {
      // Genera un valor aleatorio entre danioMinimo y danioMaximo
      this.danioRecibido1 = Math.floor(
        Math.random() * (this.danioMaximo - this.danioMinimo + 1) + this.danioMinimo
      );
  
      // Resta el daño al jugador 2
      this.vidasJugador1 -= this.danioRecibido2;
      // this.vidasJugador1 -= this.danioRecibido;
  
      // Verifica si el jugador 2 ha perdido todas las vidas
      if (this.vidasJugador2 <= 0) {
        this.reiniciarJuego();
        console.log('¡Jugador 1 ganó!');
        // Puedes agregar lógica adicional para manejar el final del juego
      } else {
        console.log(`Jugador 1 pegó ${this.danioRecibido1} de daño. Vidas restantes del Jugador 2: ${this.vidasJugador2}`);
      }

    }
  
    public iniciarTurnosAutomaticos() {
      // Inicia los turnos automáticos
      const intervalId = setInterval(() => {
        if (this.vidasJugador1 <= 0 || this.vidasJugador2 <= 0) {
          if(this.vidasJugador1 <= 0) {
            console.log('¡Jugador 1 ganó!');            
          } else {
            console.log('¡Jugador 2 ganó!');

          }
          // Al menos uno de los jugadores ha perdido, detener los turnos automáticos
          clearInterval(intervalId);
          console.log('Turnos automáticos detenidos. El juego ha terminado.');
        } else {
          this.ataqueAutomatico();
          this.pegar();
        }
      }, 2000); // Cambia el intervalo según tus necesidades
    }

    public ataqueAutomatico() {
      // Genera un valor aleatorio entre danioMinimo y danioMaximo
      this.danioRecibido2 = Math.floor(
        Math.random() * (this.danioMaximo - this.danioMinimo + 1) + this.danioMinimo
      );
    
      // Resta el daño al jugador 2
      this.vidasJugador2 -= this.danioRecibido1;
    
      // Verifica si el jugador 2 ha perdido todas las vidas
      if (this.vidasJugador1 <= 0) {
        console.log('¡Jugador 2 ganó!');
        // Puedes agregar lógica adicional para manejar el final del juego
        this.reiniciarJuego();
      } else {
        console.log(`Jugador 2 pegó ${this.danioRecibido2} de daño. Vidas restantes del Jugador 1: ${this.vidasJugador1}`);
      }
    }

    public actualizarVidas() { 
      const p1VidaElement = document.getElementById('p1-vida');
      const p2VidaElement = document.getElementById('p2-vida');

      if (p1VidaElement && p2VidaElement) {
        p1VidaElement.style.width = `${this.vidasJugador1}%`;
        p2VidaElement.style.width = `${this.vidasJugador2}%`;
      }
    }
    
    public reiniciarJuego() {
      this.vidasJugador1 = 100;
      this.vidasJugador2 = 100;
      this.selecccionarJugadorAlAzar();
    }

  public navigateAtras() {
      this.router.navigate(['boxeadores']);
  }
}
