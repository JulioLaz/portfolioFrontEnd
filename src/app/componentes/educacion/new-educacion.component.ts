import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/s-educacion.service';
@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {

  schoolE: string;
  titleE: string;
  timeE: string;
  startE: string;
  endE: string;
  estadoE: string;
  cityE: string;
  imgE: string;

  constructor(private sEducacion: SEducacionService, private router: Router) { }

  ngOnInit(): void {}

  onCreate(): void{
    const educacion = new Educacion(this.schoolE, this.titleE,this.timeE,this.startE,this.endE,this.estadoE,this.cityE,this.imgE);

    this.sEducacion.save(educacion).subscribe({
      next: () =>{alert("Educacion añadida correctamente"), this.router.navigate([''])},
      error: () =>{alert("falló"),this.router.navigate([''])},
      complete: () => console.info('complete')}
    )
  }
}
