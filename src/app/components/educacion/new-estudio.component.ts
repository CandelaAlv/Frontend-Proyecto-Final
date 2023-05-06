import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Estudio } from 'src/app/model/estudio';
import { EstudioService } from 'src/app/services/estudio.service';

@Component({
  selector: 'app-new-estudio',
  templateUrl: './new-estudio.component.html',
  styleUrls: ['./new-estudio.component.css']
})
export class NewEstudioComponent implements OnInit {
  estudio: string = '';
  descripcion: string = '';
  fecha: string = '';
constructor(private estudioService: EstudioService, private router: Router){}

ngOnInit():void{}


onCreate(): void {
  const estu = new Estudio(this.estudio, this.descripcion, this.fecha);
  this.estudioService.save(estu).subscribe(
    data => {
      alert("estudio añadido");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    }
  )
}

}
