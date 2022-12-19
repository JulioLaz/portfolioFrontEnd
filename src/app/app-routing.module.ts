import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
