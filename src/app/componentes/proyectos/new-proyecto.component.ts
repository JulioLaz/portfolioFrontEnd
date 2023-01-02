import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Proyectos } from 'src/app/model/proyectos';
import { SProyectosService } from 'src/app/service/s-proyectos.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  proyectos: string;
  descripcion: string;
  fecha: string;
  imgProyecto: string;
  imgLenguajes: string;
  urlProyecto: string;
  spinerBtn:boolean=true;

  constructor(private sProyectosService: SProyectosService, private router: Router) { }

  ngOnInit(): void {}

  onCreate(): void{
    const proyectos = new Proyectos(this.proyectos, this.descripcion,this.fecha,this.imgProyecto,this.imgLenguajes,this.urlProyecto);

    this.sProyectosService.save(proyectos).subscribe({
      next: () =>{alert("Proyecto añadido correctamente"), this.router.navigate([''])},
      error: () =>{alert("falló"),this.router.navigate([''])},
      complete: () => console.info('complete')}
    )
  }

}
