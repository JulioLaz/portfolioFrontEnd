import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { Frases } from 'src/app/model/frases';
import { NuevoUsuario } from 'src/app/model/nuevo-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { EnvioUsuarioIdService } from 'src/app/service/envio-usuario-id.service';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { SFrasesService } from 'src/app/service/s-frases.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
  expe: Experiencia[] = [];
  nuevoUsuario: NuevoUsuario[] = [];

  frasesUsuarioId: Frases[] = [];
  usuarioId: number;

  id: number = 2;
  seccionExp: number = 2;
  frase: String;
  autor: String;
  idFrases: number;

  constructor(
    private sExperienciaService: SExperienciaService,
    private tokenService: TokenService,
    private sFrases: SFrasesService,
    private authService: AuthService,
    public envioUsuarioIdService: EnvioUsuarioIdService,
    private router: Router,

  ) { }

  isLogged = false;

  ngOnInit(): void {
    this.token();
    this.cargarUsuarioId();
    this.envioUsuarioIdService.cargadorUsuarioId.subscribe(
      data=>{
        this.cargarExperiencia(data.data);
        this.cargarFraseUsuarioId(data.data);
      }
    )
  }

  token() {
    if (this.tokenService.getToken()) {
      this.isLogged = true
    } else { this.isLogged = false }
  }

  cargarExperiencia(usuarioId: number): void {
    this.sExperienciaService.findAllUsuarioId(usuarioId).subscribe(
      data => {
        data
        this.expe = JSON.parse(JSON.stringify(data));
      })
  }

  cargarFraseUsuarioId(usuarioId: number) {
    this.sFrases.findAllUsuarioId(usuarioId).subscribe(
      data => {
        data
        this.frasesUsuarioId = JSON.parse(JSON.stringify(data));
        this.frasesUsuarioId.forEach(x => {
          if (x.seccionId == this.seccionExp) {
            this.frase = x.frases;
            this.autor = x.autor;
            this.idFrases = x.id;
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
            this.cargarExperiencia(this.usuarioId);
            this.cargarFraseUsuarioId(this.usuarioId);
          }
        })
        if (this.tokenService.getUserName() == undefined) {
          this.cargarExperiencia(1);
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
        confirmButtonText: 'Yes, delete it!'
      })
        .then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Borrado!',
              nombres+ ' ha sido eliminado.',
              'success'
            )
            this.sExperienciaService.delete(id).subscribe(
              {
                next: () => {
                  { this.cargarExperiencia(this.usuarioId) }
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

