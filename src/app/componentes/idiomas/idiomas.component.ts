import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-idiomas',
  templateUrl: './idiomas.component.html',
  styleUrls: ['./idiomas.component.css']
})
export class IdiomasComponent implements OnInit {
  educacionList: any;
  miPortfolio: any;
  frases:any;
  isLogged!: boolean;

  constructor(private tokenService: TokenService,private datosPortfolio:PortfolioService) { }
  ngOnInit(): void {
  this.datosPortfolio.obtenerDatos().subscribe((data: any) =>{
    this.educacionList=data.education;
    this.miPortfolio=data.idiomas;
    this.frases=data.frases;

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    };
  });
}}
