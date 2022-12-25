import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Hardsskills } from 'src/app/model/hardsskills';
import { SHardSSkillsService } from 'src/app/service/s-hard-sskills.service';

@Component({
  selector: 'app-edit-hard-soft-skill',
  templateUrl: './edit-hard-soft-skill.component.html',
  styleUrls: ['./edit-hard-soft-skill.component.css']
})
export class EditHardSoftSkillComponent implements OnInit {
  hardsskills: Hardsskills=null;
  constructor(
    private sHardSSkillsService:SHardSSkillsService,
    private activatedRouter: ActivatedRoute,
    private router: Router
    )
    {}

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.sHardSSkillsService.detail(id).subscribe(
        data => {
          this.hardsskills = data;
        }, err => {
          alert("Error al modificar");
          this.router.navigate(['']);
        }
      )
    }

    onUpdate(){
      const id = this.activatedRouter.snapshot.params['id'];
      this.sHardSSkillsService.update(id, this.hardsskills).subscribe(
        data => {
          this.router.navigate(['']);
        }, err => {
          alert("Error al modificar la skill");
          this.router.navigate(['']);
        }
      )
    }

}
