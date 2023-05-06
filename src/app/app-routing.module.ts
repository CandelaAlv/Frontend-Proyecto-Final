import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './components/index/index.component';
import { LoginComponent } from './components/login/login.component';
import { NewTrabajoComponent } from './components/professional-info/new-trabajo.component';
import { EditTrabajoComponent } from './components/professional-info/edit-trabajo.component';
import { NewEstudioComponent } from './components/educacion/new-estudio.component';
import { EditEstudioComponent } from './components/educacion/edit-estudio.component';
import { NewHabilidadComponent } from './components/skills/new-habilidad.component';
import { EditHabilidadComponent } from './components/skills/edit-habilidad.component';
import { NewProyectoComponent } from './components/projects/new-proyecto.component';
import { EditProyectoComponent } from './components/projects/edit-proyecto.component';

import { EditAboutmeComponent } from './components/aboutme/edit-aboutme.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';

const routes: Routes = [
  {path: '', component: IndexComponent},
  {path:'login', component: LoginComponent},
  {path:'nuevotrab', component: NewTrabajoComponent},
  {path: 'edittrab/:id', component: EditTrabajoComponent},
  {path: 'nuevoestu', component: NewEstudioComponent},
  {path: 'editestu/:id', component: EditEstudioComponent},
  {path: 'nuevahabi', component: NewHabilidadComponent},
  {path: 'edithabi/:id', component: EditHabilidadComponent},
  {path: 'nuevoproye', component: NewProyectoComponent},
  {path: 'editproye/:id', component: EditProyectoComponent},
  {path: 'editaboutme/:id', component: EditAboutmeComponent},
  {path:'**', component: Pagina404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
