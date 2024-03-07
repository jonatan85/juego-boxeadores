import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';


import { ApiBoxeadores } from './apiBoxeadores/api-boxeadores.models';
import { Boxeadores } from './boxeadores.models';
import { ApiBoxeadoresService } from './apiBoxeadores/api-boxeadores.service';

@Injectable({
  providedIn: 'root'
})
export class BoxeadoresService {

  constructor(
    private apiBoxeadoresService:ApiBoxeadoresService
  ) { }

  public getBoxeadores(): Observable<Boxeadores[]> {
    return this.apiBoxeadoresService.getApiBoxeadores().pipe(
      map((apiBoxeadores: ApiBoxeadores[]) => {
        return apiBoxeadores.map((apiBoxeadores) => ({
          _id: apiBoxeadores._id,
          nombre: apiBoxeadores.nombre,
          edad: apiBoxeadores.edad,
          tipo: apiBoxeadores.tipo,
          imagen: apiBoxeadores.imagen
        }))
      })
    )
  }

  // public createBoxeadores(body: Boxeadores): Observable<Boxeadores> {
  //   return this.apiBoxeadoresService.createApiBoxeadores(body).pipe(
  //     map((apiBoxeador) => {
  //       const transformedBoxeador: Boxeadores = {
  //         _id: apiBoxeador._id,
  //         nombre: apiBoxeador.nombre,
  //         edad: apiBoxeador.edad,
  //         tipo: apiBoxeador.tipo,
  //         imagen: apiBoxeador.imagen
  //       };
  //       return transformedBoxeador;
  //     })
  //   );
  // }
  
  public createBoxeadores(body: Boxeadores): Observable<Boxeadores> {
    return this.apiBoxeadoresService.createApiBoxeadores(body).pipe(
      map((apiBoxeador) => {
        return apiBoxeador;
      })
    );
  }

  public editBoxeadores(id: string, body: Boxeadores): Observable<Boxeadores> {
    return this.apiBoxeadoresService.editApiBoxeadores(id, body).pipe(
      map((boxeador) => {
            return boxeador;
      })
    );
  }

}


