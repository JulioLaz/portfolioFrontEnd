import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Educacion } from 'src/app/model/educacion';
import { NuevoUsuario } from 'src/app/model/nuevo-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { SEducacionService } from 'src/app/service/s-educacion.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-new-educacion',
  templateUrl: './new-educacion.component.html',
  styleUrls: ['./new-educacion.component.css']
})
export class NewEducacionComponent implements OnInit {

  schoolE: string="";
  titleE: string="";
  timeE: string="";
  startE: string="";
  endE: string="";
  estadoE: string="";
  cityE: string="";
  imgE: string="";

  usuarioId:number;
  nuevoUsuario: NuevoUsuario[] = [];

  spinerBtn:boolean=true;

  constructor(
    private sEducacion: SEducacionService,
    private router: Router,
    private tokenService: TokenService,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.cargarUsuarioId();
  }

  onCreate(): void{
    const educacion = new Educacion(this.schoolE, this.titleE,this.timeE,this.startE,this.endE,this.estadoE,this.cityE,this.imgE,this.usuarioId);

    this.sEducacion.save(educacion).subscribe({
      next: () =>{
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Educacion añadida correctamente',
          showConfirmButton: false,
          timer: 1500
        }),
        this.router.navigate([''])},
      error: () =>{alert("falló"),this.router.navigate([''])},
      complete: () => console.info('complete')}
    )
  }

  cargarUsuarioId(): void {
    this.authService.lista().subscribe(
      data => {
        this.nuevoUsuario = data;
        this.nuevoUsuario.forEach(nuevo => {
          if (nuevo.nombreUsuario == this.tokenService.getUserName()) {
            this.usuarioId = nuevo.id;
          }
        })
      })
  }


}
