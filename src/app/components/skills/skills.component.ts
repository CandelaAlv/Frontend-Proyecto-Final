import { Component, OnInit } from '@angular/core';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/services/habilidad.service';
import { PortfoliodataService } from 'src/app/services/portfoliodata.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit{
  habi:Habilidad []= [];
  constructor( private habilidadService : HabilidadService, private tokenService: TokenService ){}
  isLogged = false;

  
  ngOnInit(): void {

    this.cargarHabilidad();
    if (this.tokenService.getToken()) {
      this.isLogged = true;
    } else {
      this.isLogged = false;
    }
}


cargarHabilidad(): void {
  this.habilidadService.lista().subscribe(
    data => { this.habi = data; })
}


delete(id:number){
  if(id != undefined){
    this.habilidadService.delete(id).subscribe(
      data =>{
        alert("Habilidad eliminada correctamente")
        this.cargarHabilidad();
      }, err =>{alert("no se pudo eliminar la habilidad")
      })
  }}



  


}