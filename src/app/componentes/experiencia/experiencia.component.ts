import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
 worksList: any;
 name:any;
 frases:any;

 educacionList: any;
 miPortfolio: any;
 id:any=0;
 idCard:number=0;
 deleteCards:boolean=true;
 currentYear=new Date();
 editCards:boolean=true;
 editCard:boolean=true;
 borrar:boolean=true;
 editCardItem:any=false;
 fondo:boolean=false;
 miSchool:any;
 newMiSchool:any;
 disabledFlag:boolean=false;
 borrarExperiencia:boolean=true;


  checkFondo(){
    this.fondo=!this.fondo;
    }

  asignaClases(){
    let classes = {
    bg_edit_card: this.fondo,
    };
    return classes;
    }
  constructor(private datosPortfolio:PortfolioService) { }
  ngOnInit(): void {
  this.datosPortfolio.obtenerDatos().subscribe((data: any) =>{
    this.worksList=data.works;
    this.name=data;
    this.frases=data.frases

  });
  }
}
