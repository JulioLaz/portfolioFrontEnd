import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
// import { NgbModule} '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './componentes/encabezado/encabezado.component';
import { AboutComponent } from './componentes/about/about.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { ButtonComponent } from './componentes/button/button.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { LogoAppComponent } from './componentes/logo-app/logo-app.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { RedesSocialesComponent } from './componentes/redes-sociales/redes-sociales.component';
import { IdiomasComponent } from './componentes/idiomas/idiomas.component';
import { BarraProgramacionComponent } from './componentes/barra-programacion/barra-programacion.component';
import { FooterComponent } from './componentes/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    AboutComponent,
    BannerComponent,
    ButtonComponent,
    EducacionComponent,
    ExperienciaComponent,
    LogoAppComponent,
    ProyectosComponent,
    RedesSocialesComponent,
    IdiomasComponent,
    BarraProgramacionComponent,
    FooterComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
