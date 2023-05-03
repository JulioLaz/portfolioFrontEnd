import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Frases } from 'src/app/model/frases';
import { Idiomas } from 'src/app/model/idiomas';
import { NuevoUsuario } from 'src/app/model/nuevo-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { EnvioUsuarioIdService } from 'src/app/service/envio-usuario-id.service';
import { SFrasesService } from 'src/app/service/s-frases.service';
import { SIdiomasService } from 'src/app/service/s-idiomas.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})

export class IdiomasComponent implements OnInit {
  idioma: Idiomas[] = [];
  allIdiomas: Idiomas[] = [];
  nuevoUsuario: NuevoUsuario[] = [];
  frasesUsuarioId: Frases[] = [];

  usuarioId: number;
  id: number = 4;
  frase: String;
  autor: String;
  idiomaId: Idiomas[] = [];
  usuario: number;
  imgURL: string;
  nombre: string;
  porcentaje: string;
  idiomaUsuarioIds: Idiomas[] = [];
  imgid: number;
  idFrases: number;
  seccionIdiomas: number = 4;


  constructor(
    private sIdiomasService: SIdiomasService,
    private router: Router,
    private sFrases: SFrasesService,
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
        this.cargarIdioma(data.data);
        this.cargarFraseUsuarioId(data.data);
      }
    )
  }

  token() {
    if (this.tokenService.getToken()) {
      this.isLogged = true
    } else { this.isLogged = false }
  }

  cargarIdioma(usuarioId: number): void {
    this.sIdiomasService.findAllUsuarioId(usuarioId).subscribe(
      data => {
        data
        this.idioma = JSON.parse(JSON.stringify(data));
      })
  }

  cargarFraseUsuarioId(usuarioId: number) {
    this.sFrases.findAllUsuarioId(usuarioId).subscribe(
      data => {
        data
        this.frasesUsuarioId = JSON.parse(JSON.stringify(data));
        this.frasesUsuarioId.forEach(x => {
          if (x.seccionId == this.seccionIdiomas) {
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
            this.cargarIdioma(this.usuarioId);
            this.cargarFraseUsuarioId(this.usuarioId);
          }
        })
        if (this.tokenService.getUserName() == undefined) {
          this.cargarIdioma(1);
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
            this.sIdiomasService.delete(id).subscribe(
              {
                next: () => {
                  { this.cargarIdioma(this.usuarioId) }
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
