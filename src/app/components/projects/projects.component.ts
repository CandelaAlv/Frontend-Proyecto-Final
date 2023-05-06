import { Component, OnInit } from '@angular/core';
import { Proyecto } from 'src/app/model/proyecto';
import { PortfoliodataService } from 'src/app/services/portfoliodata.service';
import { ProyectoService } from 'src/app/services/proyecto.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit{
  proye:Proyecto []= [];

  constructor( private proyectoService : ProyectoService, private tokenService: TokenService ){}
  isLogged = false;

  ngOnInit(): void {
    
    this.cargarProyecto();
  if (this.tokenService.getToken()) {
    this.isLogged = true;
  } else {
    this.isLogged = false;
  }


  }



  cargarProyecto(): void {
    this.proyectoService.lista().subscribe(
      data => { this.proye = data; })
  }
  


  delete(id:number){
    if(id != undefined){
      this.proyectoService.delete(id).subscribe(
        data =>{
          alert("Estudio eliminado correctamente")
          this.cargarProyecto();
        }, err =>{alert("no se pudo eliminar el estudio")
        })
    }}
  




}
