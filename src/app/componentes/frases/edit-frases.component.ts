import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Frases } from 'src/app/model/frases';
import { SFrasesService } from 'src/app/service/s-frases.service';

@Component({
  selector: 'app-edit-frases',
  templateUrl: './edit-frases.component.html',
  styleUrls: ['./edit-frases.component.css']
})
export class EditFrasesComponent implements OnInit {
  frases: Frases=null;
  constructor(
    private sFrasesService:SFrasesService,
    private activatedRouter: ActivatedRoute,
    private router: Router
    )
    {}

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.sFrasesService.detail(id).subscribe(
        data => {
          this.frases = data;
        }, err => {
          alert("Error al modificar");
          this.router.navigate(['']);
        }
      )
    }

    onUpdate(){
      const id = this.activatedRouter.snapshot.params['id'];
      this.sFrasesService.update(id, this.frases).subscribe(
        data => {
          this.router.navigate(['']);
        }, err => {
          alert("Error al modificar la skill");
          this.router.navigate(['']);
        }
      )
    }}
