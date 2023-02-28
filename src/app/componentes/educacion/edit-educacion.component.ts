import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { SEducacionService } from 'src/app/service/s-educacion.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-educacion',
  templateUrl: './edit-educacion.component.html',
  styleUrls: ['./edit-educacion.component.css']
})
export class EditEducacionComponent implements OnInit {
  educacion: Educacion = null;
  spinerBtn:boolean=true;

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
  this.sEducacion.detail(id).subscribe({
    next:(data)=>{this.educacion = data},
    error:(err) =>{Swal.fire("Error al cargar educacion"+ err),
       this.router.navigate([''])}
  })
}

  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.sEducacion.update(id, this.educacion).subscribe({
     next:()=>{console.log("Educacion editada: "+this.educacion.schoolE ),
     Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Educacion editada: '+this.educacion.schoolE,
      showConfirmButton: false,
      timer: 1800
    }),
        this.router.navigate([''])},
    error:() => {
        Swal.fire("Error al modificar la educacion");
        this.router.navigate([''])
      }
      })
  }
}

