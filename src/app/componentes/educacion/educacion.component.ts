import { Component, OnInit } from '@angular/core';
import { TokenService } from 'src/app/service/token.service';
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
  borrar:boolean=true;
  editCardItem:any=false;
  fondo:boolean=false;
  miSchool:any;
  newMiSchool:any;
  disabledFlag:boolean=false;
  isLogged!: boolean;

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

  constructor(private tokenService: TokenService,private datosPortfolio:PortfolioService) { }
  ngOnInit(): void {

    this.datosPortfolio.obtenerDatos().subscribe((data: any) =>{
      this.educacionList=data.education;
      this.frases=data.frases;
    });
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    };
  }
}
