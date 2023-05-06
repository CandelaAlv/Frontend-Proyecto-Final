import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


import { PortfoliodataService } from './services/portfoliodata.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BannerComponent } from './components/banner/banner.component';
import { AboutmeComponent } from './components/aboutme/aboutme.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ProfessionalInfoComponent } from './components/professional-info/professional-info.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { RedesComponent } from './components/redes/redes.component';
import { IndexComponent } from './components/index/index.component';
import { Pagina404Component } from './components/pagina404/pagina404.component';
import { BotonloginComponent } from './components/botonlogin/botonlogin.component';

import { NavbarDashboardComponent } from './components/navbar-dashboard/navbar-dashboard.component';
import { LoginComponent } from './components/login/login.component';
import { ButtonbackComponent } from './components/buttonback/buttonback.component';
import { NavbarIngresoComponent } from './components/navbar-ingreso/navbar-ingreso.component';
import { interceptorProvider } from './services/interceptor-service.service';
import { NewTrabajoComponent } from './components/professional-info/new-trabajo.component';
import { EditTrabajoComponent } from './components/professional-info/edit-trabajo.component';
import { NewEstudioComponent } from './components/educacion/new-estudio.component';
import { EditEstudioComponent } from './components/educacion/edit-estudio.component';
import { NewHabilidadComponent } from './components/skills/new-habilidad.component';
import { EditHabilidadComponent } from './components/skills/edit-habilidad.component';
import { NewProyectoComponent } from './components/projects/new-proyecto.component';
import { EditProyectoComponent } from './components/projects/edit-proyecto.component';
import { EditAboutmeComponent } from './components/aboutme/edit-aboutme.component';



@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    NavbarComponent,
    BannerComponent,
    AboutmeComponent,
    EducacionComponent,
    ProfessionalInfoComponent,
    SkillsComponent,
    ProjectsComponent,
    ContactComponent,
    RedesComponent,
    IndexComponent,
    Pagina404Component,
    BotonloginComponent,

    NavbarDashboardComponent,
    LoginComponent,
    ButtonbackComponent,
    NavbarIngresoComponent,
    NewTrabajoComponent,
    EditTrabajoComponent,
    NewEstudioComponent,
    EditEstudioComponent,
    NewHabilidadComponent,
    EditHabilidadComponent,
    NewProyectoComponent,
    EditProyectoComponent,
    EditAboutmeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PortfoliodataService, interceptorProvider
  
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
