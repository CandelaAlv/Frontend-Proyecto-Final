import { Component, OnInit } from '@angular/core';
import { persona } from 'src/app/model/persona.model';
import { PersonaService } from 'src/app/services/persona.service';
import { PortfoliodataService } from 'src/app/services/portfoliodata.service';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  persona:persona = new persona( " "," ", " ", " "," ", " ", " ", " ", " ");
 

 constructor( public personaService: PersonaService,private tokenService: TokenService){  }
 isLogged = false;
 isLogginFail = false;
 roles: string[] = [];
 
 ngOnInit():void {
  
  this.personaService.getPersona().subscribe(data => {this.persona = data})
  if(this.tokenService.getToken()){
    this.isLogged = true;
    this.isLogginFail = false;
    this.roles = this.tokenService.getAuthorities();
  }

}






}

 
