import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/service/persona.service';

@Component({
  selector: 'app-edit-about',
  templateUrl: './edit-about.component.html',
  styleUrls: ['./edit-about.component.css']
})
export class EditAboutComponent implements OnInit {
  personas: Persona = null;
  spinerBtn:boolean=true;
  id:number=1;
  constructor(
    private personaService: PersonaService,
    private router: Router

  ) {}

  ngOnInit(): void {
    this.cargarPersona();
}

cargarPersona(): void {
  this.personaService.detail(this.id).subscribe((data) => {
    this.personas = data;
})
};
  onUpdate():void{
    const id:number = 1;
    // const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.update(id, this.personas).subscribe(
      data => {
        console.log("Persona editada: "+this.personas.nombre );
        this.router.navigate(['']);
      }, err => {

        alert("Error al modificar la datos de la persona id: "+ id+ " persona: "+ this.personas.nombre+ " error: "+err);
        this.router.navigate(['']);
      }
    )
  }
}
