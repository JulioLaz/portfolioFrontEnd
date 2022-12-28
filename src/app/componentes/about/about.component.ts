import { Component, OnInit } from '@angular/core';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls:['./about.component.css']
})
export class AboutComponent implements OnInit {
  // persona: Persona[]=[];
  // persona!:any;
persona: Persona = new Persona("","","","","","","","");
  imagen:string;
  nombre:string;
  id:number=1;

  constructor(
    private tokenService: TokenService,
    public personaService: PersonaService,
    ) { }

    isLogged = false;

  ngOnInit(): void {
    this.cargarPersona();

      if (this.tokenService.getToken()) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      };

  }

  cargarPersona(): void {
    this.personaService.detail(this.id).subscribe((data) => {
      this.persona = data;
      this.nombre=data.nombre;
      this.imagen=data.img;
 })
  };
}
