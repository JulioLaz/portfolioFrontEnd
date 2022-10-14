import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {

  educacionList: any;
  miPortfolio: any;
  frases: any;
  proyectos:any;

  constructor(private datosPortfolio:PortfolioService) { }
  ngOnInit(): void {
  this.datosPortfolio.obtenerDatos().subscribe((data: any) =>{
    this.educacionList=data.education;
    this.miPortfolio=data;
    this.frases=data.frases;
    this.proyectos=data.proyectos
  });
  }

}
