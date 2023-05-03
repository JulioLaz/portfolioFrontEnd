export class Frases {
  id?: number;
  autor: string;
  frases: string;
  seccionId:number;
  usuarioId:number;


  constructor(autor:string, frases: string,usuarioId:number,seccionId:number){
      this.autor = autor;
      this.frases = frases;
      this.seccionId = seccionId;
      this.usuarioId = usuarioId;
  }
}
