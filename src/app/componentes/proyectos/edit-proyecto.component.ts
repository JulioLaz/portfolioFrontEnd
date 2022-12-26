import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { SProyectosService } from 'src/app/service/s-proyectos.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  proyectos: Proyectos = null;

  constructor(private sProyectosService: SProyectosService,private activatedRouter : ActivatedRoute,private router: Router) { }

  ngOnInit(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyectosService.detail(id).subscribe(
      data =>{
        this.proyectos = data;
      }, err =>{
         alert("Error al modificar");
         this.router.navigate(['']);
      }
    )
  }

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sProyectosService.update(id, this.proyectos).subscribe(
      data => {
        this.router.navigate(['']);
      }, err => {
        alert("Error al modificar la proyectos");
        this.router.navigate(['']);
      }
    )
  }}
