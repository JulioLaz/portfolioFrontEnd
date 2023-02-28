export class Proyectos {
  id? : number;
  proyectos : string;
  descripcion : string;
  fecha:string;
  imgProyecto : string;
  imgLenguajes:string;
  urlProyecto:string;
  usuarioId:number;


  constructor(proyectos: string,descripcion: string, fecha: string, imgProyecto: string, imgLenguajes:string,urlProyecto:string,usuarioId:number){
     this.proyectos=proyectos;
      this.descripcion = descripcion;
      this.fecha=fecha;
      this.imgProyecto=imgProyecto;
      this.imgLenguajes=imgLenguajes;
      this.urlProyecto = urlProyecto;
      this.usuarioId = usuarioId;
  }
}
