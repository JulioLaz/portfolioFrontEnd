import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

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
