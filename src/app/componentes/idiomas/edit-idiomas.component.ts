import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Idiomas } from 'src/app/model/idiomas';
import { SIdiomasService } from 'src/app/service/s-idiomas.service';

@Component({
  selector: 'app-edit-idiomas',
  templateUrl: './edit-idiomas.component.html',
  styleUrls: ['./edit-idiomas.component.css']
})
export class EditIdiomasComponent implements OnInit {
  idiomas: Idiomas=null;
  spinerBtn:boolean=true;

  constructor(
    private sIdiomasService:SIdiomasService,
    private activatedRouter: ActivatedRoute,
    private router: Router
    )
    {}

    ngOnInit(): void {
      const id = this.activatedRouter.snapshot.params['id'];
      this.sIdiomasService.detail(id).subscribe(
        data => {
          this.idiomas = data;
        }, err => {
          alert("Error al modificar");
          this.router.navigate(['']);
        }
      )
    }

    onUpdate(){
      const id = this.activatedRouter.snapshot.params['id'];
      this.sIdiomasService.update(id, this.idiomas).subscribe(
        data => {
          this.router.navigate(['']);
        }, err => {
          alert("Error al modificar la skill");
          this.router.navigate(['']);
        }
      )
    }

}

