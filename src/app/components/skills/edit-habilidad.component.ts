import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Habilidad } from 'src/app/model/habilidad';
import { HabilidadService } from 'src/app/services/habilidad.service';

@Component({
  selector: 'app-edit-habilidad',
  templateUrl: './edit-habilidad.component.html',
  styleUrls: ['./edit-habilidad.component.css']
})
export class EditHabilidadComponent implements OnInit{
  form:FormGroup;
  habiLab: Habilidad ;


  constructor(private formBuilder: FormBuilder,private habilidadService : HabilidadService, private activatedRouter: ActivatedRoute,
    private router: Router){
      this.form= this.formBuilder.group({
        id:[''],
       habilidad:['',[Validators.required]],
        porcentaje:['', [Validators.required]],
        personaid:1,})
  
  }
   
  
  ngOnInit(){
    const id = this.activatedRouter.snapshot.params['id'];
    this.habilidadService.detail(id).subscribe(
      data =>{
        this.habiLab = data;
      }, err =>{
        alert("Error al modificar trabajo");
        this.router.navigate(['']);
      }
    )
  }



  get Habilidad(){
    return this.form.get("habilidad");
  }
  
  get Porcentaje(){
    return this.form.get("porcentaje");
  }
  
  
  
  onUpdate(): void{
    const id = this.activatedRouter.snapshot.params['id'];
    this.habilidadService.editar(id, this.habiLab).subscribe(
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
