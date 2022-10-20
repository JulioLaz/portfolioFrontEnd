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
  id:any=0;
  idCard:number=0;
  deleteCards:boolean=true;
  currentYear=new Date();
  editCards:boolean=true;
  editCard:boolean=true;
  editCardItem:any=true;
  fondo:boolean=false;
  miSchool:any;
  newMiSchool:any;
  disabledFlag:boolean=false;

  checkFondo(){
    this.fondo=!this.fondo;
    }

  asignaClases(){
    let classes = {
    bg_edit_card: this.fondo,
    };
    return classes;
    }

    save(){
      this.miSchool=this.newMiSchool;
    }

  constructor(private datosPortfolio:PortfolioService) { }
  ngOnInit(): void {

    this.datosPortfolio.obtenerDatos().subscribe((data: any) =>{
      this.educacionList=data.education;
      this.frases=data.frases;
    });

  }
}
