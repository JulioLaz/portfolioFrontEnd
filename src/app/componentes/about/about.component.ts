import { Component, Input, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls:['./about.component.css']
})
export class AboutComponent implements OnInit {
  miPortfolio:any;
  miHistoria:any;
  textoAbout!:string;
  newMiHistoria!:string;
  historiaOriginal!:string;
  miTitulo:any;
  newMiTitulo!:string;
  tituloOriginal!:string;


save(){
  this.miHistoria=this.newMiHistoria
}
save_titulo(){
  this.miTitulo=this.newMiTitulo
}
textoOriginal(){
  this.newMiHistoria = this.historiaOriginal;
}
fc_tituloOriginal(){
  this.newMiTitulo = this.tituloOriginal;

}
cerrar(){
  this.newMiHistoria = this.miHistoria;
}

  constructor(private datosPortfolio:PortfolioService) { }
  ngOnInit(): void {
  this.datosPortfolio.obtenerDatos().subscribe((data: any) =>{
    this.miPortfolio=data;
    this.miHistoria=data.miHistoria;
    this.newMiHistoria=this.miHistoria;
    this.historiaOriginal=this.miHistoria;

    this.miTitulo=data.titulo;
    this.newMiTitulo=this.miTitulo;
    this.tituloOriginal=this.miTitulo;
  });
  }
}
