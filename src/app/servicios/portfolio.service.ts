import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Observable } from 'rxjs';
// import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  constructor(public http:HttpClient) { }
  obtenerDatos(){
    console.log("el servicio portfolio funciona")
    return this.http.get('assets/data/data.json')
  }
}
// export class PersonaService {
//   url='http://localhost:8080/personas/'
//     constructor(private http: HttpClient) { }
//     public getPersona():Observable<persona>{
//       console.log("el servicio persona funciona")
//   return this.http.get<persona>(this.url+'traer');
//     }
//   }
