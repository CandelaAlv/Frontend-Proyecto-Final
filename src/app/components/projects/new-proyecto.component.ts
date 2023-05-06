import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-new-proyecto',
  templateUrl: './new-proyecto.component.html',
  styleUrls: ['./new-proyecto.component.css']
})
export class NewProyectoComponent implements OnInit {
  proyecto: string = '';
  url: string= '';
 



  constructor( private proyectoService: ProyectoService, private router: Router){
    

  }


  ngOnInit():void{}


  onCreate(): void {
    const proye = new Proyecto(this.proyecto, this.url);
    this.proyectoService.save(proye).subscribe(
      data => {
        alert("proyecto añadido");
        this.router.navigate(['']);
      }, err => {
        alert("proyecto se creó");
        this.router.navigate(['']);
      }
    )
  }
  
}
