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
  miEdad:any;
  newMiEdad!:string;
  edadOriginal!:string;
  miUbicacion:any;
  newMiUbicacion!:string;
  ubicacionOriginal!:string;


  save_titulo(){
  this.miHistoria=this.newMiHistoria
  this.miTitulo=this.newMiTitulo
  this.miEdad=this.newMiEdad
  this.miUbicacion=this.newMiUbicacion
}
  save(){
  this.miHistoria=this.newMiHistoria
}
fc_tituloOriginal(){
  this.newMiHistoria = this.historiaOriginal;
  this.newMiTitulo = this.tituloOriginal;
  this.newMiEdad = this.edadOriginal;
  this.newMiUbicacion = this.ubicacionOriginal;
}
  fc_textoOriginal(){
  this.newMiHistoria = this.historiaOriginal;
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

    this.miEdad=data.edad;
    this.newMiEdad=this.miEdad;
    this.edadOriginal=this.miEdad;

    this.miUbicacion=data.ubicacion;
    this.newMiUbicacion=this.miUbicacion;
    this.ubicacionOriginal=this.miUbicacion;
  });
  }
}
