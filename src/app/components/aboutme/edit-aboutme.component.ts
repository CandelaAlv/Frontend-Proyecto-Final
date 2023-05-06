import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';

@Component({
  selector: 'app-edit-aboutme',
  templateUrl: './edit-aboutme.component.html',
  styleUrls: ['./edit-aboutme.component.css']
})
export class EditAboutmeComponent implements OnInit{
  form:FormGroup;
  persoLab: persona;

  constructor(private formBuilder: FormBuilder,private personaService : PersonaService, private activatedRouter: ActivatedRoute,
    private router: Router){
      this.form= this.formBuilder.group({
        id:[''],
        banner:[''],
        titulo:[''],
        name:[''],
        imagen:[''],
        sobreMi:[''],
        email:[''],
        instagram:[''],
        facebook:[''],
        twitter:[''],
        personaid:1,})
  }



  ngOnInit(){

    const id = this.activatedRouter.snapshot.params['id'];
    this.personaService.detail(id).subscribe(
      data =>{
        this.persoLab = data;
      }, err =>{
        alert("Error al modificar trabajo");
        this.router.navigate(['']);
      }
    )
  
  
  }
  
  get Banner(){
    return this.form.get("banner");
  }
  
  
  get Name(){
    return this.form.get("name");
  }
  get SobreMi(){
    return this.form.get("sobreMi");
  }
  
  get Imagen(){
    return this.form.get("imagen");
  }
  get Titulo(){
    return this.form.get("titulo");
  }
  
  get Email(){
    return this.form.get("email");
  }

  get Instagram(){
    return this.form.get("instagram");
  }
  
  get Facebook(){
    return this.form.get("facebook");
  }
  get Twitter(){
    return this.form.get("twitter");
  }
  
  
 
onUpdate(): void{
  const id = this.activatedRouter.snapshot.params['id'];
  this.personaService.editar(id, this.persoLab).subscribe(
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
