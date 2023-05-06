import { Component, OnInit } from '@angular/core';
import { Estudio } from 'src/app/model/estudio';
import { EstudioService } from 'src/app/services/estudio.service';
import { PortfoliodataService } from 'src/app/services/portfoliodata.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.css']
})
export class EducacionComponent implements OnInit{

  estu:Estudio []= [];
  
  
  constructor (private estudioService : EstudioService, private tokenService: TokenService)
{}
isLogged = false;


ngOnInit():void {
  this.cargarEstudio();
  if (this.tokenService.getToken()) {
    this.isLogged = true;
  } else {
    this.isLogged = false;
  }


}
 

cargarEstudio(): void {
  this.estudioService.lista().subscribe(
    data => { this.estu = data; })
}


delete(id:number){
  if(id != undefined){
    this.estudioService.delete(id).subscribe(
      data =>{
        alert("Estudio eliminado correctamente")
        this.cargarEstudio();
      }, err =>{alert("no se pudo eliminar el estudio")
      })
  }}




}
