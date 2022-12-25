export class Idiomas {
  id?: number;
  nombre: string;
  porcentaje: string;
  imgURL:string;

  constructor(nombre:string, porcentaje: string, imgURL:string){
      this.nombre = nombre;
      this.porcentaje = porcentaje;
      this.imgURL=imgURL;
  }
}
