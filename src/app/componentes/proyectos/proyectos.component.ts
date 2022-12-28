import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
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
  id: number = 5;
  frase: String;
  autor: String;

  constructor(
    private sFrases: SFrasesService,
    private sProyectos: SProyectosService,
    private tokenService: TokenService,
  ) {}

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyectos();
    this.cargarFrase();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }
  cargarFrase(): void {
    this.sFrases.detail(this.id).subscribe((data) => {
      this.frase = data.frases;
      this.autor = data.autor;
    })
  }

  cargarProyectos(): void {
    this.sProyectos.lista().subscribe(
      data => { this.proyectos = data })
  };

  delete(id?: number) {
    if (id != undefined) {
      this.sProyectos.delete(id).subscribe(
        {
          next: () => { this.cargarProyectos() },
          error: () => { alert("No se pudo eliminar") },
          complete: () => { console.info('complete') }
        })
    };
  }
}
