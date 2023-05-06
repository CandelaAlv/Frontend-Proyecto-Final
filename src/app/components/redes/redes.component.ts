import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { PortfoliodataService } from 'src/app/services/portfoliodata.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-redes',
  templateUrl: './redes.component.html',
  styleUrls: ['./redes.component.css']
})
export class RedesComponent implements OnInit {
  persona:persona = new persona( " "," ", " ", " "," ", " ", " ", " ", " ");


  constructor( public personaService: PersonaService,private tokenService: TokenService){  }


  ngOnInit():void {
    this.personaService.getPersona().subscribe(data => {this.persona = data})
 
  }


}
