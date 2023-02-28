import { Component, OnInit } from '@angular/core';
import { LoginUsuario } from 'src/app/model/login-usuario';
import { Persona } from 'src/app/model/persona.model';
import { AuthService } from 'src/app/service/auth.service';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';
import { NuevoUsuario } from 'src/app/model/nuevo-usuario';
import { Rol } from 'src/app/model/rol';
import { SUsuarioService } from 'src/app/service/s-usuario.service';
import { Usuario } from 'src/app/model/usuario';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  persona: Persona = new Persona(null, "", "", "", "", "", "", "", "");
  nuevoUsuario: NuevoUsuario[] = [];
  usuario: NuevoUsuario[] = [];
  imagen: string;
  nombre: string;
  id: number;
  rol: Rol[] = [];
  userId: Usuario[] = [];

  //////
  isLogged = false;
  isLoginFail = false;
  loginUsuario!: LoginUsuario;
  nombreUsuario!: string;
  password!: string;
  roles: string[] = [];
  errMsj!: string;
  spinerBtn: boolean = true;
  /////

  constructor(
    private tokenService: TokenService,
    public personaService: PersonaService,
    private authService: AuthService,
    private usuarioService: SUsuarioService,
  ) { }


  ngOnInit(): void {
    this.token();
    this.id = 1;
    this.cargarPersona();
    this.cargarId();
    this.cargarUsuario();
  }

  token() {
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarRoles() {
    this.authService.listaRol().subscribe(
      data => {
        this.rol = JSON.parse(JSON.stringify(data));
        this.rol.forEach(e => console.log(e.id + "typeof: " + typeof e.id + typeof this.rol));
        this.rol.forEach(i => i.id);
        console.log("Rol: " + JSON.stringify(this.rol));
        console.log("Data: " + (JSON.stringify(data)));
      }
    )
  }

  cargarId() {
    this.authService.lista().subscribe(
      data => {
        this.nuevoUsuario = data;
        this.nuevoUsuario.forEach(nuevo => {
          if (nuevo.nombreUsuario == this.tokenService.getUserName()) {
            console.log(" desde if: " + nuevo.nombreUsuario + " -  id: " + nuevo.id);
            this.id = nuevo.id;
            this.cargarPersona();
          }
        })
      }
    )
  };

  cargarPersona(): void {
    this.personaService.detail(this.id).subscribe((data) => {
      this.persona = data;
    })
  }

  cargarUsuario(): void {
    this.authService.lista().subscribe((data) => {
      this.usuario = data;
      this.usuario.forEach(nuevo => {
        if (nuevo.id == this.id) {
          // console.log("usuario: "+ nuevo.nombre)
        }
      })
    })
  }

  cargarIdXNombre() {
    const nombre: String = "A";
    console.log("cargarIdXNombre Nombre: " + nombre)
    this.authService.nombreXid(nombre).subscribe(
      data => {
        this.userId = data;
        console.log(this.userId);
        console.log("cargarIdXNombre: " + typeof data + JSON.stringify(data));
      }
    )
  }
}
