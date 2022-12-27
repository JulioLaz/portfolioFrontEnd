import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls:['./about.component.css']
})
export class AboutComponent implements OnInit {
  // persona: Persona[] = [];
persona: Persona = new Persona("","","","","","","","");

  imagen!:string;
  // tokenService!: any;
  isLogged!: boolean;
  id:number=1;

  constructor(
    private tokenService: TokenService,
    private router: Router,

    public personaService: PersonaService,
    public datosPortfolio:PortfolioService) { }
  ngOnInit(): void {
    // this.cargarExperiencia();

    this.personaService.getPersona().subscribe((data)=> {
      this.persona=data;
      this.imagen=data.img

      if (this.tokenService.getToken()) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      };
  });
  }
  cargarExperiencia() {
    throw new Error('Method not implemented.');
  }

  onUpdate(){
    // const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.update(this.id, this.persona).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la datos del autor");
        this.router.navigate(['']);
      }
    )
  }
}
