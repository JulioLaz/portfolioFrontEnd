import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EnvioUsuarioIdService {
  selecionUsuarioId:number=1;
  @Output() cargadorUsuarioId: EventEmitter<any> = new EventEmitter();
  constructor(
  ) { }

  // enviarUsuarioId(usuarioId: number): void{
  //   console.log("UsuarioID desde Service: "+ this.selecionUsuarioId);
  //   return
  // }
}
