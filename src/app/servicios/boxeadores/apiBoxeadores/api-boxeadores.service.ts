import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiBoxeadores } from './api-boxeadores.models';

const BASE_URL = 'https://juego-boxeo-movil-bntz.vercel.app';
@Injectable({
  providedIn: 'root'
})
export class ApiBoxeadoresService {

  constructor(private http:HttpClient) { }

  public getApiBoxeadores(): Observable<ApiBoxeadores[]> {    
    return this.http.get<ApiBoxeadores[]>(`${BASE_URL}/boxeadores`);
  }

  public getApiBoxeadoresDetail(id: string): Observable<ApiBoxeadores> {
    return this.http.get<ApiBoxeadores>(`${BASE_URL}/boxeadores/${id}`);
  }

  public deleteApiBoxeadores(id: string): Observable<ApiBoxeadores> {
    return this.http.delete<ApiBoxeadores>(`${BASE_URL}/boxeadores/${id}`);
  }

  public createApiBoxeadores(body: ApiBoxeadores): Observable<ApiBoxeadores> {
    return this.http.post<ApiBoxeadores>(`${BASE_URL}/boxeadores`, body);
  }

  public editApiBoxeadores(id: string, body: ApiBoxeadores): Observable<ApiBoxeadores> {
    const bodyId = {...body, _id:id }
    return this.http.put<ApiBoxeadores>(`${BASE_URL}/boxeadores/${id}`, bodyId);
  }
}
