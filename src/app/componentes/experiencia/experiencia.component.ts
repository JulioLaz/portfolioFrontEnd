import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';
@Component({
  selector: 'app-experiencia',
  templateUrl: './experiencia.component.html',
  styleUrls: ['./experiencia.component.css']
})
export class ExperienciaComponent implements OnInit {
expe: Experiencia[]=[];

 worksList: any;
 name:any;
 frases:any;
 educacionList: any;
 miPortfolio: any;
//  id!:number;
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


  constructor(private sExperienciaService: SExperienciaService, private tokenService: TokenService,private datosPortfolio:PortfolioService,private activatedRouter: ActivatedRoute) { }
  isLogged = false;

  ngOnInit(): void {
    this.cargarExperiencia();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }


  this.datosPortfolio.obtenerDatos().subscribe((data: any) =>{
    this.worksList=data.works;
    this.name=data;
    this.frases=data.frases

  });
}

cargarExperiencia(): void {
  this.sExperienciaService.lista().subscribe(data => { this.expe = data})
}

delete(id?: number){
  if(id != undefined){
    this.sExperienciaService.delete(id).subscribe({
      next: () => {this.cargarExperiencia(), console.log("Experiencias cargadas"+ this.expe),alert(this.expe)},
      error: () => {alert("No se pudo borrar la experiencia")},
      complete: () => {console.info('complete')}})

    }
    }
  }


// this.sExperiencia.save(expe).subscribe({
//   next: (a) => {console.log("Experiencia añadida"),
//               alert("Experiencia añadida"),
//               this.router.navigate(['']);},
//   error: (e) => {console.error("Falló"), alert("Falló");},
//    //     this.router.navigate(['/nuevaexp']);
//   complete: () => console.info('complete')
// })
