import { Component, OnInit } from '@angular/core';
import { Hardsskills } from 'src/app/model/hardsskills';
import { SFrasesService } from 'src/app/service/s-frases.service';
import { SHardSSkillsService } from 'src/app/service/s-hard-sskills.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-hard-soft-skills',
  templateUrl: './hard-soft-skills.component.html',
  styleUrls: ['./hard-soft-skills.component.css']
})
export class HardSoftSkillsComponent implements OnInit {
  hardsskills: Hardsskills[] = [];
  id: number =3 ;
  frases!: any;

  constructor(
    private sFrases: SFrasesService,
    private sHardSSkillsService: SHardSSkillsService,
    private tokenService: TokenService,
  ) {
  }

  isLogged = false;

  ngOnInit(): void {
    this.cargarSkills();

    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
    this.sFrases.detail(this.id).subscribe((data) => {
      this.frases = data;
    })
  }

  cargarSkills(): void {
    this.sHardSSkillsService.lista().subscribe(
      data => {
        this.hardsskills = data;
      }
    )
  }

  delete(id?: number) {
    if (id != undefined) {
      this.sHardSSkillsService.delete(id).subscribe(
        {
          next: () => { this.cargarSkills() },
          error: () => { alert("No se pudo eliminar") },
          complete: () => { console.info('complete') }
        })
    };
  }
}


