import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacionList: any;
  miPortfolio: any;
  frases: any;
  id!:number;
  deleteCards:boolean=true;
  currentYear=new Date();


  constructor(private datosPortfolio:PortfolioService) { }
  ngOnInit(): void {
    // this.currentYear=new Date("YYYY");
    console.log(this.currentYear);

    this.datosPortfolio.obtenerDatos().subscribe((data: any) =>{
      this.educacionList=data.education;
      this.miPortfolio=data;
      this.frases=data.frases;
      this.id=data.educacion.id;
      console.log(data.educacion.id);
    });

  }
}
