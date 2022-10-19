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
  editCards:boolean=true;
  fondo:boolean=false;
  miSchool:any;
  newMiSchool:any;

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
      // this.miSchool=this.newMiSchool;
      this.newMiSchool=this.miSchool;
      console.log(this.miSchool)
    }
  constructor(private datosPortfolio:PortfolioService) { }
  ngOnInit(): void {

    this.datosPortfolio.obtenerDatos().subscribe((data: any) =>{
      this.educacionList=data.education;
      this.miPortfolio=data;
      this.frases=data.frases;
      this.id=data.educacion.id;
      this.miSchool=data.education.school;


      // console.log(data.education.school);
    });

  }
}
