export class Persona{
   id?:number;
   nombre: string;
   apellido: string;
   img: string;
   about: string;
   city: string;
   edad: string;
   title: string;
   titleAbout: string;

   constructor(nombre:string,apellido:string,about:string,img:string,city:string,edad:string,title:string,titleAbout:string){
      this.nombre = nombre;
      this.apellido=apellido;
      this.img=img;
      this.about=about;
      this.city=city;
      this.edad=edad;
      this.title=title;
      this.titleAbout=titleAbout;
   }
}
