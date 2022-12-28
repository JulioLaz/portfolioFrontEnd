import { Component, OnInit } from '@angular/core';
import { Idiomas } from 'src/app/model/idiomas';
import { SFrasesService } from 'src/app/service/s-frases.service';
import { SIdiomasService } from 'src/app/service/s-idiomas.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {
  hardsskills: Idiomas[] = [];
  id: number = 4;
  frase: String;
  autor: String;
  constructor(
    private sIdiomasService: SIdiomasService,
    private sFrases: SFrasesService,
    private tokenService: TokenService,
  ) {

  }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();
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

  cargarSkills(): void {
    this.sIdiomasService.lista().subscribe(
      data => {
        this.hardsskills = data;
      }
    )
  }

  delete(id?: number) {
    if (id != undefined) {
      this.sIdiomasService.delete(id).subscribe(
        {
          next: () => { this.cargarSkills() },
          error: () => { alert("No se pudo eliminar") },
          complete: () => { console.info('complete') }
        })
    };
  }
}
