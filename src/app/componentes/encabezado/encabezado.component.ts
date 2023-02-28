import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NuevoUsuario } from 'src/app/model/nuevo-usuario';
import { Persona } from 'src/app/model/persona.model';
import { AuthService } from 'src/app/service/auth.service';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
  persona: Persona = new Persona(null, "", "", "", "", "", "", "", "");

isLogged=false;
isLoggedDel:boolean=false;
nuevoUsuario: NuevoUsuario[] = [];
userId:number;
nombre:string;

  constructor(
    private router: Router,
    private tokenservice: TokenService,
    private authService: AuthService,
    public personaService: PersonaService,


    ) { }

  ngOnInit(): void {
    this.token();
    this.cargarId();;
      }

  token(){
  if(this.tokenservice.getToken()){
    this.isLogged=true;
  }else{
    this.isLogged=false
  }
  console.log("username: "+this.tokenservice.getUserName())
}
  habilitarDelUser(userId: number){
    if(userId==1){
      this.isLoggedDel=true;
    }else{
      this.isLoggedDel=false
    }
    console.log("id usuario: "+this.userId + " isLoggedDel:  "+this.isLoggedDel+ " isLogged: "+ this.isLogged)
  }

  cargarId() {
    this.authService.lista().subscribe(
      data => {
        this.nuevoUsuario = data;
        this.nuevoUsuario.forEach(nuevo => {
          if (nuevo.nombreUsuario == this.tokenservice.getUserName()) {
            console.log(" desde if: " + nuevo.nombreUsuario + " -  id: " + nuevo.id);
            this.userId = nuevo.id;
            this.nombre = nuevo.nombre;
            this.habilitarDelUser(this.userId);
            this.cargarPersona(this.userId);
          }
        })
      }
    )
  }

  cargarPersona(id: number): void {
    this.personaService.detail(id).subscribe((data) => {
      this.persona = data;
    })
  }


  onLogOut():void{
    this.tokenservice.logOut();
    window.location.reload();
  }
  login(){
    this.router.navigate(['/login'])
  }
  newUser():void{
    this.router.navigateByUrl('/nuevousuario');
  }

  delUser():void{
    this.router.navigateByUrl('/delusuario');
  }

}
