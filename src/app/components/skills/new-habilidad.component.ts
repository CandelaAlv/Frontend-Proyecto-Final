import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/services/habilidad.service';

@Component({
  selector: 'app-new-habilidad',
  templateUrl: './new-habilidad.component.html',
  styleUrls: ['./new-habilidad.component.css']
})
export class NewHabilidadComponent implements OnInit{
  habilidad: string = '';
  porcentaje: number;
  form: FormGroup;

constructor(private formBuilder: FormBuilder,private habilidadService: HabilidadService, private router: Router){

  this.form= this.formBuilder.group({
    habilidad:['',[Validators.required]],  
    porcentaje:['', [Validators.required, Validators.min(0), Validators.max(100)]],  
    personaid:[1],
  })
  }




ngOnInit():void{}


get Habilidad(){
  return this.form.get("habilidad");
}

get Porcentaje(){
  return this.form.get("porcentaje");
}





onCreate(): void {
  const habi = new Habilidad(this.habilidad, this.porcentaje);
  this.habilidadService.save(habi).subscribe(
    data => {
      alert("habilidad añadida");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    }
  )
}


}