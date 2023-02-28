import { Roles } from "./roles";

export class Usuario {
  id?: number;
  nombre!: string;
  nombreUsuario!: string;
  email!: string;
  password!: string;
  roles:Roles[]=[];

constructor(nombre:string,nombreUsuario:string,email:string,password:string,roles:Roles[]){
 this.nombre=nombre;
 this.nombreUsuario=nombreUsuario;
 this.email=email;
 this.password=password;
 this.roles=roles;
}
}
