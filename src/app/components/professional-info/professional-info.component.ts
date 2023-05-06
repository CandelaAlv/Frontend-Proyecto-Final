import { Component, OnInit } from '@angular/core';
import { Trabajo } from 'src/app/model/trabajo';
import { PortfoliodataService } from 'src/app/services/portfoliodata.service';
import { TokenService } from 'src/app/services/token.service';
import { TrabajoService } from 'src/app/services/trabajo.service';

@Component({
  selector: 'app-professional-info',
  templateUrl: './professional-info.component.html',
  styleUrls: ['./professional-info.component.css']
})
export class ProfessionalInfoComponent implements OnInit{
  trab:Trabajo []= [];
constructor(private trabajoService : TrabajoService, private tokenService: TokenService){}
isLogged = false;



ngOnInit(): void {
  
  this.cargarTrabajo();
  if (this.tokenService.getToken()) {
    this.isLogged = true;
  } else {
    this.isLogged = false;
  }
}

cargarTrabajo(): void {
  this.trabajoService.lista().subscribe(
    data => { this.trab = data; })
}



delete(id:number){
  if(id != undefined){
    this.trabajoService.delete(id).subscribe(
      data =>{
        alert("Trabajo eliminado correctamente")
        this.cargarTrabajo();
      }, err =>{alert("no se pudo eliminar el trabajo")
      })
  }}






}

