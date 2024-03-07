import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Boxeadores } from '../boxeadores/boxeadores.models';
import { BoxeadoresService } from '../boxeadores/boxeadores.service';

@Injectable({
  providedIn: 'root'
})
export class BoxeadoresRingService {

  private boxeador: Boxeadores | undefined;
  public selectBoxeadores: Boxeadores | null = null;

  constructor(
    private boxeadoresService:BoxeadoresService
  ) { }

  public selectBoxeadoresRandom (boxeadores: Boxeadores[]): Observable<Boxeadores | null>{
    if (boxeadores && boxeadores.length > 0 ) {
      const randomIndex = Math.floor(Math.random() * boxeadores.length );
      const randomBoxeador = boxeadores[randomIndex];
      return of(randomBoxeador);
    } else {
      return of(null);
    }
  }

  public seleccionarJugadorServicio(_id: string) {
      // this.boxeadoresService.getBoxeadores().subscribe(boxeadores => {
      //   const selectBoxeador1 = boxeadores.find(boxeador => boxeador._id === _id);
      //   this.selectBoxeadores = selectBoxeador1 ?? null;
      //   return this.enviarBoxeadorPrincipal(selectBoxeador1)
        // console.log('Boxeador selccionado', this.selectBoxeadores);
    // })
  }

  public enviarBoxeadorPrincipal(){
    
  }
}
