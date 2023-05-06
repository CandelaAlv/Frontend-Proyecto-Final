import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { persona } from '../model/persona.model';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {
  
url = 'https://portfolio-backend-ha4y.onrender.com/persona/';
  constructor(private httpClient: HttpClient) { }




  public getPersona(): Observable<persona>{
    return this.httpClient.get<persona>(this.url + 'detail/1');
  }

  public lista(): Observable<persona[]>{
    return this.httpClient.get<persona[]>(this.url + 'lista');
  }



  public detail(id: number):Observable<persona>{
  return this.httpClient.get<persona>(this.url + `detail/${id}`);
  }

  public save(perso: persona):Observable<any>{
    return this.httpClient.post<any>(this.url + 'new', perso);
    }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
    }

 
    public editar(id:number, persona: persona):Observable<any>{
      return this.httpClient.put<any>(this.url + 'update',persona );
      }





}
