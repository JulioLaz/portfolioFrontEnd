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
import { HerramientasComponent } from './componentes/herramientas/herramientas.component';
import { SlideComponent } from './componentes/slide/slide.component';
import { FeelingComponent } from './componentes/feeling/feeling.component';

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
    HerramientasComponent,
    SlideComponent,
    FeelingComponent,

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
