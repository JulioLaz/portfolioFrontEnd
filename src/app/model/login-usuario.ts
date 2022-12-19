export class LoginUsuario {
   nombreUsuario:string;
   password:string;

   constructor(nombreUsuario: string, password: string){
      this.password=password;
      this.nombreUsuario=nombreUsuario;
   }
}
