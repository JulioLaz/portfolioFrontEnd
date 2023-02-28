import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { NuevoUsuario } from '../model/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class SUsuarioService {

  URL = environment.URL + 'usuario/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<NuevoUsuario[]>{
    return this.httpClient.get<NuevoUsuario[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<NuevoUsuario>{
    return this.httpClient.get<NuevoUsuario>(this.URL + `detail/${id}`);
  }

  public save(usuario: NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', usuario);
  }

  public update(id: number, usuario: NuevoUsuario): Observable<any>{
    console.log("servicio de editar funciona"+usuario)
    return this.httpClient.put<any>(this.URL + `update/${id}`, usuario);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.URL + `delete/${id}`);
  }
}
