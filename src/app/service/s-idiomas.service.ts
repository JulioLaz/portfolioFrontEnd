import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Idiomas } from '../model/idiomas';

@Injectable({
  providedIn: 'root'
})
export class SIdiomasService {
  // URL = 'https://portafolio-back-juliolazarte.onrender.com/idiomas/';
  URL = environment.URL + 'idiomas/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Idiomas[]>{
    return this.httpClient.get<Idiomas[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Idiomas>{
    return this.httpClient.get<Idiomas>(this.URL + `detail/${id}`);
 }

  public findAllUsuarioId(usuarioId: number): Observable<Idiomas>{
    return this.httpClient.get<Idiomas>(this.URL + `usuarioId/${usuarioId}`);
  }

  public save(idioma: Idiomas): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', idioma);
  }

  public update(id: number, idioma: Idiomas): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, idioma);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete(this.URL + `delete/${id}`);
  }

  public deleteUsuarioId(usuarioId: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `deleteUsuarioId/${usuarioId}`);
  }
}
