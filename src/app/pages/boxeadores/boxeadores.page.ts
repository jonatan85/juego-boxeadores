import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Boxeadores } from 'src/app/servicios/boxeadores/boxeadores.models';
import { BoxeadoresService } from 'src/app/servicios/boxeadores/boxeadores.service';
import { BoxeadoresRingService } from 'src/app/servicios/boxeadoresRing/boxeadores-ring.service';
@Component({
  selector: 'app-boxeadores',
  templateUrl: './boxeadores.page.html',
  styleUrls: ['./boxeadores.page.scss'],
})
export class BoxeadoresPage implements OnInit {
  public boxeadores?: Observable<Boxeadores[]>
  public boxeador: Boxeadores[] = [];
  public selectBoxeadores: Boxeadores | null = null;
 

  constructor(
    private boxeadoresService: BoxeadoresService,
    private boxeadorRingService: BoxeadoresRingService,
    private router:Router
  ) { }

  ngOnInit() {
    this.boxeadores = this.boxeadoresService.getBoxeadores();    
  }

  public seleccionaJugador(_id:string) {
    // this.boxeadorRingService.seleccionarJugadorServicio(_id);
    this.boxeadoresService.getBoxeadores().subscribe(boxeadores => {
      const selectBoxeador1 = boxeadores.find(boxeador => boxeador._id === _id);
      this.selectBoxeadores = selectBoxeador1 || null;
      console.log('Boxeador selccionado', this.selectBoxeadores);
      this.router.navigate(['ring/'+this.selectBoxeadores?._id])

    })
    // const boxeador2 = this.selecccionarJugadorAlAzar()
  }

  public selecccionarJugadorAlAzar() {
    this.boxeadoresService.getBoxeadores().subscribe(boxeadores => {
      this.boxeadorRingService.selectBoxeadoresRandom(boxeadores).subscribe(randomBoxeador => {
        this.selectBoxeadores = randomBoxeador;
        console.log('Boxeador seleccionado al azar', this.selectBoxeadores);
        
      })
    });
  }

  public navigateAtras() {
    this.router.navigate(['folder/Inbox']);
}

}

