import { Component, OnInit } from '@angular/core';
import { Frases } from 'src/app/model/frases';
import { NuevoUsuario } from 'src/app/model/nuevo-usuario';
import { Proyectos } from 'src/app/model/proyectos';
import { AuthService } from 'src/app/service/auth.service';
import { SFrasesService } from 'src/app/service/s-frases.service';
import { SProyectosService } from 'src/app/service/s-proyectos.service';
import { TokenService } from 'src/app/service/token.service';

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
    private sProyectos: SProyectosService,
    private tokenService: TokenService,
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
            console.log("frases: " + x.frases + " autor: " + x.autor + " id: " + x.id + "  seccionID: " + x.seccionId + "  usuarioId: " + x.usuarioId)
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

  delete(id?: number) {
    if (id != undefined) {
      this.sProyectos.delete(id).subscribe(
        {
          next: () => { this.cargarProyectos(this.usuarioId) },
          error: () => { alert("No se pudo eliminar") },
          complete: () => { console.info('complete') }
        })
    };
  }
}
