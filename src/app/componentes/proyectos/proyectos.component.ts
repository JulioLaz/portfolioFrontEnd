import { Component, OnInit } from '@angular/core';
import { Proyectos } from 'src/app/model/proyectos';
import { SProyectosService } from 'src/app/service/s-proyectos.service';
import { TokenService } from 'src/app/service/token.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.css']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyectos[] = [];
  educacionList: any;
  frases: any;


  constructor(private sProyectos: SProyectosService,private tokenService: TokenService,private datosPortfolio:PortfolioService) {
    this.datosPortfolio.obtenerDatos().subscribe((data: any) =>{
      this.educacionList=data.education;
      this.frases=data.frases});
  }

  isLogged = false;

  ngOnInit(): void {
    this.cargarProyectos();
    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  };

  cargarProyectos(): void{
      this.sProyectos.lista().subscribe(
      data =>{this.proyectos = data}
    )};

  delete(id?: number){
    if( id != undefined){
      this.sProyectos.delete(id).subscribe(
        {
        next:() => {this.cargarProyectos()},
        error: () => {alert("No se pudo eliminar")},
        complete: () => {console.info('complete')}})
          };
        }
  }
