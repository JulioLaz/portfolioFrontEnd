import { Component, OnInit } from '@angular/core';
import { Experiencia } from 'src/app/model/experiencia';
import { Frases } from 'src/app/model/frases';
import { NuevoUsuario } from 'src/app/model/nuevo-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { SFrasesService } from 'src/app/service/s-frases.service';
import { TokenService } from 'src/app/service/token.service';
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
  ) { }

  isLogged = false;

  ngOnInit(): void {
    this.token();
    this.cargarUsuarioId();
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
            console.log("frases: "+x.frases+" autor: "+x.autor+ " id: "+ x.id+"  seccionID: "+ x.seccionId+"  usuarioId: "+x.usuarioId)
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

  delete(id?: number) {
    if (id != undefined) {
      this.sExperienciaService.delete(id).subscribe({
        next: () => { this.cargarExperiencia(this.usuarioId) },
        error: () => { alert("No se pudo borrar la experiencia") },
        complete: () => { console.info('complete') }
      })
    }
  }




  //SIN USO
  cargarExperienciaXXX(): void {
    this.sExperienciaService.lista().subscribe(data => { this.expe = data })
  }
  cargarFrase(): void {
    this.sFrases.detail(this.id).subscribe((data) => {
      this.frase = data.frases;
      this.autor = data.autor;
    })
  }
}

