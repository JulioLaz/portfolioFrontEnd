import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Frases } from 'src/app/model/frases';
import { Hardsskills } from 'src/app/model/hardsskills';
import { NuevoUsuario } from 'src/app/model/nuevo-usuario';
import { AuthService } from 'src/app/service/auth.service';
import { EnvioUsuarioIdService } from 'src/app/service/envio-usuario-id.service';
import { SFrasesService } from 'src/app/service/s-frases.service';
import { SHardSSkillsService } from 'src/app/service/s-hard-sskills.service';
import { TokenService } from 'src/app/service/token.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-hard-soft-skills',
  templateUrl: './hard-soft-skills.component.html',
  styleUrls: ['./hard-soft-skills.component.css']
})
export class HardSoftSkillsComponent implements OnInit {
  hardsskills: Hardsskills[] = [];
  nuevoUsuario: NuevoUsuario[] = [];
  frasesUsuarioId: Frases[] = [];

  id: number =3 ;
  frase: String;
  autor: String;
  seccionHSS:number=3;
  usuarioId:number;
  nombre:String;
  idFrases: number;


  constructor(
    private sFrases: SFrasesService,
    private router: Router,
    private sHardSSkillsService: SHardSSkillsService,
    private tokenService: TokenService,
    private authService: AuthService,
    public envioUsuarioIdService: EnvioUsuarioIdService,
  ) {
  }

  isLogged = false;

  ngOnInit(): void {
    this.token();
    this.cargarUsuarioId();
    this.envioUsuarioIdService.cargadorUsuarioId.subscribe(
      data=>{
        this.cargarHardsSkills(data.data);
        this.cargarFraseUsuarioId(data.data);
      }
    )
  }

  token() {
    if (this.tokenService.getToken()) {
      this.isLogged = true
    } else { this.isLogged = false }
  }

  cargarHardsSkills(usuarioId: number): void {
    this.sHardSSkillsService.findAllUsuarioId(usuarioId).subscribe(
      data => {
        data
        this.hardsskills = JSON.parse(JSON.stringify(data));
      })
  }
  
  getUsuarioId() {
    if (this.usuarioId == undefined) {
      this.usuarioId = 1
    } else {
      this.sHardSSkillsService.findAllUsuarioId(this.usuarioId).subscribe(
        data => {
          this.hardsskills = JSON.parse(JSON.stringify(data));
          // console.log("data: " + JSON.stringify(data));
        })
    }
  }

  cargarFraseUsuarioId(usuarioId: number) {
    this.sFrases.findAllUsuarioId(usuarioId).subscribe(
      data => {
        data
        this.frasesUsuarioId = JSON.parse(JSON.stringify(data));
        this.frasesUsuarioId.forEach(x => {
          if (x.seccionId == this.seccionHSS) {
            this.frase = x.frases;
            this.autor = x.autor;
            this.idFrases = x.id;
            // console.log("frases: "+x.frases+" autor: "+x.autor+ " id: "+ x.id+"  seccionID: "+ x.seccionId+"  usuarioId: "+x.usuarioId)
          }
        })
      })
  }

  cargarUsuarioId(): void {
    this.authService.lista().subscribe(
      data => {
        this.nuevoUsuario = data;
        this.nuevoUsuario.forEach(nuevo => {
          if (nuevo.nombreUsuario == this.tokenService.getUserName()) {
            this.usuarioId = nuevo.id;
            this.cargarHardsSkills(this.usuarioId);
            this.cargarFraseUsuarioId(this.usuarioId);
          }
        })
        if (this.tokenService.getUserName() == undefined) {
          this.cargarHardsSkills(1);
          this.cargarFraseUsuarioId(1);
        }
      })
  }

delete(nombres: string,id?: number) {
    if (id != undefined) {
      Swal.fire({
        title: 'Quieres borrar '+ nombres + '?',
        text: "Esto será irreversible! ",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, borrar '+nombres + '!'
      })
        .then((result) => {
          if (result.isConfirmed) {
            Swal.fire(
              'Borrado!',
              nombres+ ' ha sido eliminado.',
              'success'
            )
            this.sHardSSkillsService.delete(id).subscribe(
              {
                next: () => {
                  { this.cargarHardsSkills(this.usuarioId) }
                  this.router.navigate([''])
                },
                error: (e) => {
                  Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'No se pudo eliminar!',
                    footer: 'error: '+e
                  })
                },
                complete: () => { console.log('complete') }
              })
          }
        })
    }
  }
}


