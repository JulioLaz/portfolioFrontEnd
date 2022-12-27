import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Frases } from '../model/frases';

@Injectable({
  providedIn: 'root'
})
export class SFrasesService {
  URL = environment.URL + 'frases/';

  constructor(private httpClient: HttpClient) { }

  public lista(): Observable<Frases[]>{
    return this.httpClient.get<Frases[]>(this.URL + 'lista');
  }

  public detail(id: number): Observable<Frases>{
    return this.httpClient.get<Frases>(this.URL + `detail/${id}`);
  }

  public save(frases: Frases): Observable<any>{
    return this.httpClient.post<any>(this.URL + 'create', frases);
  }

  public update(id: number, frases: Frases): Observable<any>{
    return this.httpClient.put<any>(this.URL + `update/${id}`, frases);
  }

  public delete(id: number): Observable<any>{
    return this.httpClient.delete(this.URL + `delete/${id}`);
  }


}
