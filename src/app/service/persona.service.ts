import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})

  export class PersonaService {
    URL = environment.URL + 'personas/';

    constructor(private httpClient: HttpClient) { }

    public getPersona(): Observable<Persona>{
      console.log("el servicio persona funciona: "+ Persona);
      return this.httpClient.get<Persona>(this.URL+ 'traer/perfil');
    }

    public update(id: number, persona: Persona): Observable<any>{
      // return this.httpClient.put<any>(this.URL + 'editar/1', persona);
      return this.httpClient.put<any>(this.URL + `editar/${id}`, persona);
    }
  }


