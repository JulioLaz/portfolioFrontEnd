import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/s-educacion.service';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  educacion: Educacion = null;

  constructor(
    private sEducacion: SEducacionService,
    private activatedRouter : ActivatedRoute,
    private router: Router
    ) {}

  ngOnInit(): void {
    this.cargarEducacion();
  }

cargarEducacion(){
  const id = this.activatedRouter.snapshot.params['id'];
  this.sEducacion.detail(id).subscribe(
    data =>{
      this.educacion = data;
    }, err =>{
       alert("Error al cargar educacion");
       this.router.navigate(['']);
    }
  )
}

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.update(id, this.educacion).subscribe(
      data => {
        console.log("Educacion editada: "+this.educacion.schoolE );
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la educacion");
        this.router.navigate(['']);
      }
    )
  }

}
