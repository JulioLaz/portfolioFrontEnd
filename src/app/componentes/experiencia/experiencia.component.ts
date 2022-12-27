import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { SFrasesService } from 'src/app/service/s-frases.service';
import { TokenService } from 'src/app/service/token.service';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
expe: Experiencia[]=[];
id: number = 2;
frases!: any;

  constructor(
    private sExperienciaService: SExperienciaService,
    private tokenService: TokenService,
    private sFrases: SFrasesService,
    ) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }

  this.sFrases.detail(this.id).subscribe((data) => {
    this.frases = data;
  })
}

cargarExperiencia(): void {
  this.sExperienciaService.lista().subscribe(data => { this.expe = data})
}

delete(id?: number){
  if(id != undefined){
    this.sExperienciaService.delete(id).subscribe({
      next: () => {this.cargarExperiencia()},
      error: () => {alert("No se pudo borrar la experiencia")},
      complete: () => {console.info('complete')}})

    }
    }
  }

