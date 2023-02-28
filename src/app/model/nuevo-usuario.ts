export class NuevoUsuario {
  id?: number;
   nombre!: string;
   nombreUsuario!: string;
   email!: string;
   password!: string;
   authorities!: string;

constructor(nombre:string,nombreUsuario:string,email:string,password:string,authorities:string){
  this.nombre=nombre;
  this.nombreUsuario=nombreUsuario;
  this.email=email;
  this.password=password;
  this.authorities=authorities;
}

}
