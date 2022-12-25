export class Proyectos {
  id? : number;
  proyectos : string;
  descripcion : string;
  fecha:string;
  imgProyecto : string;
  imgLenguajes:string;
  urlProyecto:string;

  constructor(proyectos: string,descripcion: string, fecha: string, imgProyecto: string, imgLenguajes:string,urlProyecto:string){
     this.proyectos=proyectos;
      this.descripcion = descripcion;
      this.fecha=fecha;
      this.imgProyecto=imgProyecto;
      this.imgLenguajes=imgLenguajes;
      this.urlProyecto = urlProyecto;
  }
}
