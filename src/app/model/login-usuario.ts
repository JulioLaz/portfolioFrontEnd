export class LoginUsuario {
  id?: number;
  nombreUsuario:string;
  password:string;

   constructor(nombreUsuario: string, password: string){
      this.password=password;
      this.nombreUsuario=nombreUsuario;
   }
}
