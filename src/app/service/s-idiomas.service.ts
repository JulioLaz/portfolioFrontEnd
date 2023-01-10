import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Idiomas } from '../model/idiomas';

@Injectable({
  providedIn: 'root'
})
export class SIdiomasService {
  URL = 'https://portafolio-back-juliolazarte.onrender.com/idiomas/';
  // URL = environment.URL + 'idiomas/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Idiomas[]>{
    return this.httpClient.get<Idiomas[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Idiomas>{
    return this.httpClient.get<Idiomas>(this.URL + `detail/${id}`);
  }

  public save(skill: Idiomas): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', skill);
  }

  public update(id: number, skill: Idiomas): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, skill);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete(this.URL + `delete/${id}`);
  }
}
