export class Idiomas {
  id?: number;
  nombre: string;
  porcentaje: string;
  imgURL:string;
  usuarioId:number;

  constructor(nombre: string,porcentaje: string,imgURL: string, usuarioId: number){
      this.nombre = nombre;
      this.porcentaje = porcentaje;
      this.imgURL=imgURL;
      this.usuarioId=usuarioId;
  }
}
