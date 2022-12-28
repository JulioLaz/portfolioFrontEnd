import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/s-educacion.service';
import { SFrasesService } from 'src/app/service/s-frases.service';
import { TokenService } from 'src/app/service/token.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: Educacion[] = [];
  id: number = 1;
  frase: String;
  autor: String;
  constructor(
    private sFrases: SFrasesService,
    private sEducacion: SEducacionService,
    private tokenService: TokenService
  ) { }

  isLogged = false;

  ngOnInit(): void {
    this.cargarEducacion();
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
  cargarEducacion(): void {
    this.sEducacion.lista().subscribe(
      data => { this.educacion = data }
    )
  };

  delete(id?: number) {
    if (id != undefined) {
      this.sEducacion.delete(id).subscribe(
        {
          next: () => { this.cargarEducacion() },
          error: () => { alert("No se pudo eliminar") },
          complete: () => { console.info('complete') }
        })
    };
  }
}
