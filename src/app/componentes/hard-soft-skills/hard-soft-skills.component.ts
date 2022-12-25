import { Component, OnInit } from '@angular/core';
import { Hardsskills } from 'src/app/model/hardsskills';
import { SHardSSkillsService } from 'src/app/service/s-hard-sskills.service';
import { TokenService } from 'src/app/service/token.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-hard-soft-skills',
  templateUrl: './hard-soft-skills.component.html',
  styleUrls: ['./hard-soft-skills.component.css']
})
export class HardSoftSkillsComponent implements OnInit {
  hardsskills: Hardsskills[] = [];
  educacionList: any;
  frases: any;

  constructor(private sHardSSkillsService: SHardSSkillsService, private tokenService: TokenService,private datosPortfolio:PortfolioService) {
    this.datosPortfolio.obtenerDatos().subscribe((data: any) =>{
      this.educacionList=data.programacion;
      this.frases=data.frases});
  }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();

    if(this.tokenService.getToken()){
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
  }

  cargarSkills(): void{
    this.sHardSSkillsService.lista().subscribe(
      data => {
        this.hardsskills = data;
      }
    )
  }


          delete(id?: number){
            if( id != undefined){
              this.sHardSSkillsService.delete(id).subscribe(
                {
                next:() => {this.cargarSkills()},
                error: () => {alert("No se pudo eliminar")},
                complete: () => {console.info('complete')}})
                  };
                }

}
