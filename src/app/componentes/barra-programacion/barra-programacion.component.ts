import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-barra-programacion',
  templateUrl: './barra-programacion.component.html',
  styleUrls: ['./barra-programacion.component.css']
})
export class BarraProgramacionComponent implements OnInit {

  educacionList: any;
  miPortfolio: any;
  frases:any;

  constructor(private datosPortfolio:PortfolioService) { }
  ngOnInit(): void {
  this.datosPortfolio.obtenerDatos().subscribe((data: any) =>{
    this.educacionList=data.education;
    this.miPortfolio=data.programacion;
    this.frases=data.frases
  });

}}
