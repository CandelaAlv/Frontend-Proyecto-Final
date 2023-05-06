import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Trabajo } from 'src/app/model/trabajo';
import { TrabajoService } from 'src/app/services/trabajo.service';

@Component({
  selector: 'app-new-trabajo',
  templateUrl: './new-trabajo.component.html',
  styleUrls: ['./new-trabajo.component.css']
})
export class NewTrabajoComponent implements OnInit{
  trabajo: string = '';
  descripcion: string = '';
  fecha: string = '';
constructor(private trabajoService: TrabajoService, private router: Router){}
 
ngOnInit():void{}

 
onCreate(): void {
  const trab = new Trabajo(this.trabajo, this.descripcion, this.fecha);
  this.trabajoService.save(trab).subscribe(
    data => {
      alert("trabajo añadido");
      this.router.navigate(['']);
    }, err => {
      alert("Falló");
      this.router.navigate(['']);
    }
  )
}




}
