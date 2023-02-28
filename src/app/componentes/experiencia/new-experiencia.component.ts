import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { NuevoUsuario } from 'src/app/model/nuevo-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  nombreE: string = '';
  cargoE: string = '';
  descripcionE: string = '';
  startE: string = '';
  endE: string = '';
  cityE: string = '';

  usuarioId:number;
  nuevoUsuario: NuevoUsuario[] = [];

  spinerBtn:boolean=true;
  isLogged!: boolean;

  constructor(
    private sExperiencia: SExperienciaService,
    private tokenService: TokenService,
    private router: Router,
    private authService: AuthService
    ) { }

  ngOnInit(): void {
    this.cargarUsuarioId();
  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreE,this.cargoE, this.descripcionE, this.startE, this.endE, this.cityE,this.usuarioId);
    this.sExperiencia.save(expe).subscribe({
      next: () => {console.log("Experiencia añadida"),alert("Experiencia añadida"),this.router.navigate(['']);},
      error: () => {console.error("Falló"), alert("Falló");},   //     this.router.navigate(['/nuevaexp']);
      complete: () => console.info('complete')
  })
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
