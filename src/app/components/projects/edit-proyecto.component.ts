import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Proyecto } from 'src/app/model/proyecto';
import { ProyectoService } from 'src/app/services/proyecto.service';

@Component({
  selector: 'app-edit-proyecto',
  templateUrl: './edit-proyecto.component.html',
  styleUrls: ['./edit-proyecto.component.css']
})
export class EditProyectoComponent implements OnInit {
  form:FormGroup;
  proyeLab: Proyecto ;
constructor(private formBuilder: FormBuilder,private proyectoService : ProyectoService, private activatedRouter: ActivatedRoute,
  private router: Router){
    this.form= this.formBuilder.group({
      id:[''],
      proyecto:[''],
      url:[''],
      personaid:1,})
    
  }


ngOnInit():void{

  const id = this.activatedRouter.snapshot.params['id'];
  this.proyectoService.detail(id).subscribe(
    data =>{
      this.proyeLab = data;
    }, err =>{
      alert("Error al modificar trabajo");
      this.router.navigate(['']);
    }
  )

}




get Proyecto(){
  return this.form.get("proyecto");
}

get url(){
  return this.form.get("url");
}


onUpdate(): void{
  const id = this.activatedRouter.snapshot.params['id'];
  this.proyectoService.editar(id, this.proyeLab).subscribe(
    data => {
      this.router.navigate(['']);
    }
  )
}
 

onEnviar(event:Event){
  event.preventDefault;
  if (this.form.valid){
    this.onUpdate();
    alert("funciona");
  }else{
    alert("nofunciona");
    this.form.markAllAsTouched();
  }
}








}
