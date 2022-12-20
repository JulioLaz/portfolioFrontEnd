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
  exp: Experiencia = new Experiencia("","","","","","");
  // id!: any;
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
      // this.exp = data;

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
      next: (a) => {console.log("Experiencia añadida"),
                  alert("Experiencia añadida"),
                  this.router.navigate(['']);},
      error: (e) => {console.error("Falló"), alert("Falló");},
      complete: () => console.info('complete')
  })

    // subscribe(
    //   data => {
    //     alert("Experiencia añadida");
    //     // this.router.navigate(['']);
    //   }, err  => {
    //     alert("Falló");
    //     this.router.navigate(['/nuevaexp']);
    //   }
    // )
  }

}
