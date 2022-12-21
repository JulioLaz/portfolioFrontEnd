import { Component, OnInit } from '@angular/core';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/s-educacion.service';
import { TokenService } from 'src/app/service/token.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit {
  educacion: Educacion[] = [];


  educacionList: any;
  miPortfolio: any;
  frases: any;
  // id:any=0;
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
  // isLogged!: boolean;

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

  constructor(private sEducacion: SEducacionService,private tokenService: TokenService,private datosPortfolio:PortfolioService) {
    this.datosPortfolio.obtenerDatos().subscribe((data: any) =>{
      this.educacionList=data.education;
      this.frases=data.frases});
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  isLogged = false;
  ngOnInit(): void {
    this.cargarEducacion();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  };

  cargarEducacion(): void{
      this.sEducacion.lista().subscribe(
      data =>{this.educacion = data}
    )};

  delete(id?: number){
    if( id != undefined){
      this.sEducacion.delete(id).subscribe({
        next:() => {this.cargarEducacion()},
        error: () => {alert("No se pudo eliminar")},
        complete: () => {console.info('complete')}})
      };


    }
  }
