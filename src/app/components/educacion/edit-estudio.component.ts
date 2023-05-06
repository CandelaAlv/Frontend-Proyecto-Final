import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Estudio } from 'src/app/model/estudio';
import { EstudioService } from 'src/app/services/estudio.service';

@Component({
  selector: 'app-edit-estudio',
  templateUrl: './edit-estudio.component.html',
  styleUrls: ['./edit-estudio.component.css']
})
export class EditEstudioComponent implements OnInit{
  form:FormGroup;
  estuLab: Estudio = null;


  constructor(private formBuilder: FormBuilder,private estudioService : EstudioService, private activatedRouter: ActivatedRoute,
    private router: Router){
      this.form= this.formBuilder.group({
        id:[''],
        estudio:['',[Validators.required]],
        descripcion:['', [Validators.required]],
        fecha:[''],
        personaid:1,})
  
  }



  ngOnInit(){

    const id = this.activatedRouter.snapshot.params['id'];
    this.estudioService.detail(id).subscribe(
      data =>{
        this.estuLab = data;
      }, err =>{
        alert("Error al modificar trabajo");
        this.router.navigate(['']);
      }
    )
  
  
  }
  
  
  
  get Estudio(){
    return this.form.get("estudio");
  }
  get Fecha(){
    return this.form.get("fecha");
  }
  
  get Descripcion(){
    return this.form.get("descripcion");
  }
  
  
 
 
onUpdate(): void{
  const id = this.activatedRouter.snapshot.params['id'];
  this.estudioService.editar(id, this.estuLab).subscribe(
    data => {
      this.router.navigate(['']);
    }
  )
}
  
  onEnviar(event:Event){
    event.preventDefault;
    if (this.form.valid){
      this.onUpdate();
    }else{
      alert("funciona");
      this.form.markAllAsTouched();
    }
  }
  





  
}
