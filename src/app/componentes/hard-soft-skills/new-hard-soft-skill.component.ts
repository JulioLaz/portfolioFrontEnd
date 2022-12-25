import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Hardsskills } from 'src/app/model/hardsskills';
import { SHardSSkillsService } from 'src/app/service/s-hard-sskills.service';

@Component({
  selector: 'app-new-hard-soft-skill',
  templateUrl: './new-hard-soft-skill.component.html',
  styleUrls: ['./new-hard-soft-skill.component.css']
})
export class NewHardSoftSkillComponent implements OnInit {

  nombre: string;
  porcentaje: string;
  imgURL: string;

  constructor(private sHardSSkillsService: SHardSSkillsService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const skill = new Hardsskills(this.nombre, this.porcentaje, this.imgURL);
    this.sHardSSkillsService.save(skill).subscribe(
      data => {
        alert("Skill creada correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo al añadir la skill");
        this.router.navigate(['']);
      }
    )
  }

}
