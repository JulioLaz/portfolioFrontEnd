export class Cursos {
  id? : number;
  curso : string;
  descripcion : string;
  imgCurso: string;
  usuarioId:number;

  constructor(curso: string, descripcion: string, imgCurso: string,usuarioId:number){
     this.curso=curso;
      this.descripcion = descripcion;
      this.imgCurso=imgCurso;
      this.usuarioId=usuarioId
    }
  }
