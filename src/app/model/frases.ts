export class Frases {
  id?: number;
  autor: string;
  frases: string;

  constructor(autor:string, frases: string){
      this.autor = autor;
      this.frases = frases;
  }
}
