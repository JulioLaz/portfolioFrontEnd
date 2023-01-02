import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Idiomas } from 'src/app/model/idiomas';
import { SIdiomasService } from 'src/app/service/s-idiomas.service';

@Component({
  selector: 'app-new-idiomas',
  templateUrl: './new-idiomas.component.html',
  styleUrls: ['./new-idiomas.component.css']
})
export class NewIdiomasComponent implements OnInit {
  nombre: string;
  porcentaje: string;
  imgURL: string;
  spinerBtn:boolean=true;
  
  constructor(private sIdiomasService: SIdiomasService, private router: Router) { }

  ngOnInit(): void {
  }

  onCreate(): void{
    const idiomas = new Idiomas(this.nombre, this.porcentaje, this.imgURL);
    this.sIdiomasService.save(idiomas).subscribe(
      data => {
        alert("Idioma creado correctamente");
        this.router.navigate(['']);
      }, err =>{
        alert("Fallo al añadir el idioma");
        this.router.navigate(['']);
      }
    )
  }
}
