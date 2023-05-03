import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cursos } from 'src/app/model/cursos';
import { NuevoUsuario } from 'src/app/model/nuevo-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { SCursosService } from 'src/app/service/s-cursos.service';
import { SProyectosService } from 'src/app/service/s-proyectos.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-new-curso',
  templateUrl: './new-curso.component.html',
  styleUrls: ['./new-curso.component.css']
})
export class NewCursoComponent implements OnInit {
  curso: string="";
  descripcion: string="";
  imgCurso: string="";
  usuarioId: number;
  nuevoUsuario: NuevoUsuario[] = [];

  spinerBtn:boolean=true;

  constructor(
    public activatedRouter: ActivatedRoute,
    private sCursos: SCursosService,
    private router: Router,
    private authService: AuthService,
    private tokenService: TokenService,
    ) { }

  ngOnInit(): void {
    this.cargarUsuarioId();
  }

  onCreate(): void{
    const cur = new Cursos(this.curso, this.descripcion,this.imgCurso,this.usuarioId);
    this.sCursos.save(cur).subscribe({
      next: () =>{
        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Proyecto creado correctamente',
          showConfirmButton: false,
          timer: 1500
        }),
        this.router.navigate([''])},
      error: (e) =>{
        console.log("Falló"),
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'No se pudo eliminar!',
          footer: 'error: ' + e
      }),
        this.router.navigate([''])
      },
      complete: () => console.log('complete proyecto')}
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
