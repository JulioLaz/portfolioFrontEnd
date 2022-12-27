import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/service/token.service';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-encabezado',
  templateUrl: './encabezado.component.html',
  styleUrls: ['./encabezado.component.css']
})
export class EncabezadoComponent implements OnInit {
isLogged=false;
  constructor(private router: Router, private tokenservice: TokenService) { }

  ngOnInit(): void {
    if(this.tokenservice.getToken()){
      this.isLogged=true;
    }else{
      this.isLogged=false
    }
  }
  onLogOut():void{
    this.tokenservice.logOut();
    window.location.reload();
  }
  login(){
    this.router.navigate(['/login'])
  }

}
