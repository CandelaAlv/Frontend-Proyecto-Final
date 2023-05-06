import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Trabajo } from 'src/app/model/trabajo';
import { TrabajoService } from 'src/app/services/trabajo.service';

@Component({
  selector: 'app-edit-trabajo',
  templateUrl: './edit-trabajo.component.html',
  styleUrls: ['./edit-trabajo.component.css']
})
export class EditTrabajoComponent implements OnInit{
  form:FormGroup;
  expLab: Trabajo ;
 
constructor(private formBuilder: FormBuilder,private trabajoService : TrabajoService, private activatedRouter: ActivatedRoute,
  private router: Router){
    this.form= this.formBuilder.group({
      id:[''],
      trabajo:['',[Validators.required]],
      descripcion:['', [Validators.required]],
      fecha:[''],
      personaid:1,})

}
 

ngOnInit(){

  const id = this.activatedRouter.snapshot.params['id'];
  this.trabajoService.detail(id).subscribe(
    data =>{
      this.expLab = data;
    }, err =>{
      alert("Error al modificar trabajo");
      this.router.navigate(['']);
    }
  )


}



get Trabajo(){
  return this.form.get("trabajo");
}

get Descripcion(){
  return this.form.get("descripcion");
}



onUpdate(): void{
  const id = this.activatedRouter.snapshot.params['id'];
  this.trabajoService.editar(id, this.expLab).subscribe(
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
