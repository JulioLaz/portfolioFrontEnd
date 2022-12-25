import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia.component';
import { EditHardSoftSkillComponent } from './componentes/hard-soft-skills/edit-hard-soft-skill.component';
import { NewHardSoftSkillComponent } from './componentes/hard-soft-skills/new-hard-soft-skill.component';
import { HomeComponent } from './componentes/home/home.component';
import { EditIdiomasComponent } from './componentes/idiomas/edit-idiomas.component';
import { NewIdiomasComponent } from './componentes/idiomas/new-idiomas.component';
import { LoginComponent } from './componentes/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaexp', component: NewExperienciaComponent },
  { path: 'editexp/:id', component: EditExperienciaComponent },
  { path: 'nuevaedu', component: NewEducacionComponent},
  { path: 'editedu/:id', component: EditEducacionComponent},
  { path: 'newskill', component: NewHardSoftSkillComponent},
  { path: 'editskill/:id', component: EditHardSoftSkillComponent},
  { path: 'newidioma', component: NewIdiomasComponent},
  { path: 'editidioma/:id', component: EditIdiomasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
