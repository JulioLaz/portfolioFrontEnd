import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Frases } from 'src/app/model/frases';
import { NuevoUsuario } from 'src/app/model/nuevo-usuario';
import { Proyectos } from 'src/app/model/proyectos';
import { AuthService } from 'src/app/service/auth.service';
import { EnvioUsuarioIdService } from 'src/app/service/envio-usuario-id.service';
import { SFrasesService } from 'src/app/service/s-frases.service';
import { SProyectosService } from 'src/app/service/s-proyectos.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})

export class ProyectosComponent implements OnInit {
  proyectos: Proyectos[] = [];
  nuevoUsuario: NuevoUsuario[] = [];
  frasesUsuarioId: Frases[] = [];

  usuarioId: number;
  seccionProyectos: number = 5;
  id: number = 5;
  frase: String;
  autor: String;
  idFrases: number;

  constructor(
    private sFrases: SFrasesService,
    private router: Router,
    private sProyectos: SProyectosService,
    private tokenService: TokenService,
    private authService: AuthService,
    public envioUsuarioIdService: EnvioUsuarioIdService,
  ) { }

  isLogged = false;

  ngOnInit(): void {
    this.token();
    this.cargarUsuarioId();
    this.envioUsuarioIdService.cargadorUsuarioId.subscribe(
      data=>{
        this.cargarProyectos(data.data);
        this.cargarFraseUsuarioId(data.data);
        // console.log("RECIBEINDO DATA DESDE EXPERIENCIA: "+data.data)
      }
    )
  }

  token() {
    if (this.tokenService.getToken()) {
      this.isLogged = true
    } else { this.isLogged = false }
  }

  cargarProyectos(usuarioId: number): void {
    this.sProyectos.findAllUsuarioId(usuarioId).subscribe(
      data => {
        data
        this.proyectos = JSON.parse(JSON.stringify(data));
      })
  }

  cargarFraseUsuarioId(usuarioId: number) {
    this.sFrases.findAllUsuarioId(usuarioId).subscribe(
      data => {
        data
        this.frasesUsuarioId = JSON.parse(JSON.stringify(data));
        this.frasesUsuarioId.forEach(x => {
          if (x.seccionId == this.seccionProyectos) {
            this.frase = x.frases;
            this.autor = x.autor;
            this.idFrases = x.id;
            // console.log("frases: " + x.frases + " autor: " + x.autor + " id: " + x.id + "  seccionID: " + x.seccionId + "  usuarioId: " + x.usuarioId)
          }
        })
      })
  }

  cargarUsuarioId(): void {
    this.authService.lista().subscribe(
      data => {
        this.nuevoUsuario = data;
        this.nuevoUsuario.forEach(nuevo => {
          if (nuevo.nombreUsuario == this.tokenService.getUserName()) {
            this.usuarioId = nuevo.id;
            this.cargarProyectos(this.usuarioId);
            this.cargarFraseUsuarioId(this.usuarioId);
          }
        })
        if (this.tokenService.getUserName() == undefined) {
          this.cargarProyectos(1);
          this.cargarFraseUsuarioId(1);
        }
      })
  }

  delete(nombres: string,id?: number) {
    if (id != undefined) {
      Swal.fire({
        title: 'Quieres borrar '+ nombres + '?',
        text: "Esto será irreversible! ",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borrar '+nombres + '!'
      })
        .then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Borrado!',
              nombres+ ' ha sido eliminado.',
              'success'
            )
            this.sProyectos.delete(id).subscribe(
              {
                next: () => {
                  { this.cargarProyectos(this.usuarioId) }
                  this.router.navigate([''])
                },
                error: (e) => {
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No se pudo eliminar!',
                    footer: 'error: '+e
                  })
                },
                complete: () => { console.log('complete') }
              })
          }
        })
    }
  }
}
