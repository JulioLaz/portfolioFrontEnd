import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Cursos } from '../model/cursos';
// import { Educacion } from '../model/educacion';

@Injectable({
  providedIn: 'root'
})
export class SCursosService {

  // URL ='https://portafolio-back-juliolazarte.onrender.com/proyectos/';
  URL = environment.URL + 'cursos/';

  constructor(private httpClient : HttpClient) { }

  public lista(): Observable<Cursos[]>{
    return this.httpClient.get<Cursos[]>(this.URL + 'lista');
  }

  public findAllUsuarioId(usuarioId: number): Observable<Cursos>{
    return this.httpClient.get<Cursos>(this.URL + `usuarioId/${usuarioId}`);
  }

  public detail(id: number): Observable<Cursos>{
    return this.httpClient.get<Cursos>(this.URL + `detail/${id}`);
  }

  public save(cursos: Cursos): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', cursos);
  }

  public update(id: number, cursos: Cursos): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, cursos);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }

  public deleteUsuarioId(usuarioId: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `deleteUsuarioId/${usuarioId}`);
  }
  }
