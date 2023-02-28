export class Persona{
   id:number;
   nombre: string;
   apellido: string;
   img: string;
   title: string;
   city: string;
   edad: string;
   titleAbout: string;
   about: string;

   constructor(
    id:number,
    nombre:string,
    apellido:string,
    img:string,
    title:string,
    city:string,
    edad:string,
    titleAbout:string,
    about:string
    )
    {
      this.id=id;
      this.nombre = nombre;
      this.apellido=apellido;
      this.img=img;
      this.title=title;
      this.city=city;
      this.edad=edad;
      this.titleAbout=titleAbout;
      this.about=about;
   }
}
