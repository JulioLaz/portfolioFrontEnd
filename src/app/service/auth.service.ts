import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtDto } from '../model/jwt-dto';
import { LoginUsuario } from '../model/login-usuario';
import { NuevoUsuario } from '../model/nuevo-usuario';
import { Rol } from '../model/rol';
import { Usuario } from '../model/usuario';
import { UsuarioRol } from '../model/usuario-rol';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
// authURL = 'https://portafolio-back-juliolazarte.onrender.com/auth/';
authURL = environment.URL + 'auth/';
  constructor(private httpClient: HttpClient) { }

  public nuevo(nuevoUsuario: NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.authURL+'nuevo', nuevoUsuario);
  }
  public nuevoUser(usuario: Usuario): Observable<any>{
    return this.httpClient.post<any>(this.authURL+'nuevo', usuario);
  }

  public login(loginUsuario: LoginUsuario): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authURL+'login',loginUsuario);
  }

  public getIdUsuario(id: number): Observable<JwtDto>{
    return this.httpClient.get<JwtDto>(this.authURL + `login/${id}`);
  }

  public lista(): Observable<NuevoUsuario[]>{
    return this.httpClient.get<NuevoUsuario[]>(this.authURL + 'lista');
  }

  public nombreXid(nombre: String): Observable<Usuario[]>{
    console.log("desde authService: nombre: " + nombre);
    return this.httpClient.get<Usuario[]>(this.authURL + `nombreXid/${nombre}`);
  }

  public usuarioIdXid(usuarioId: number): Observable<Rol[]>{
    console.log("desde authService: nombre: " + usuarioId);
    return this.httpClient.get<Rol[]>(this.authURL + `usuarioIdXid/${usuarioId}`);
  }

  public listaRol(): Observable<Rol[]>{
    return this.httpClient.get<Rol[]>(this.authURL + 'listaRol');

  }
  public listaUsuarioRol(): Observable<UsuarioRol[]>{
    return this.httpClient.get<UsuarioRol[]>(this.authURL + 'listaUsuarioRol');
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete<any>(this.authURL + `delete/${id}`);
  }
}
