import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{ HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PortfoliodataService {

  constructor( private http:HttpClient) { }


getDatos():Observable <any>{
  return this.http.get('./assets/data/datos.json');
}

}
