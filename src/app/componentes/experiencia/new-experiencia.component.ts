import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Experiencia } from 'src/app/model/experiencia';
import { SExperienciaService } from 'src/app/service/s-experiencia.service';
import { TokenService } from 'src/app/service/token.service';

@Component({
  selector: 'app-new-experiencia',
  templateUrl: './new-experiencia.component.html',
  styleUrls: ['./new-experiencia.component.css']
})
export class NewExperienciaComponent implements OnInit {
  expe: Experiencia = new Experiencia("","","","","","");
  spinerBtn:boolean=true;
  nombreE: string = '';
  cargoE: string = '';
  descripcionE: string = '';
  startE: string = '';
  endE: string = '';
  cityE: string = '';
  isLogged!: boolean;


  constructor(private sExperiencia: SExperienciaService, private tokenService: TokenService,private router: Router) { }

  ngOnInit(): void {
    this.sExperiencia.lista().subscribe((data)=> {

      if (this.tokenService.getToken()) {
        this.isLogged = true;
      } else {
        this.isLogged = false;
      };
  });
  }

  onCreate(): void {
    const expe = new Experiencia(this.nombreE,this.cargoE, this.descripcionE, this.startE, this.endE, this.cityE);

    this.sExperiencia.save(expe).subscribe({
      next: () => {console.log("Experiencia añadida"),
                  alert("Experiencia añadida"),
                  this.router.navigate(['']);},
      error: () => {console.error("Falló"), alert("Falló");},
       //     this.router.navigate(['/nuevaexp']);
      complete: () => console.info('complete')
  })

  }

}
