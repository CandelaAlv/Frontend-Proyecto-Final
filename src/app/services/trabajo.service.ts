import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trabajo } from '../model/trabajo';

@Injectable({
  providedIn: 'root'
})
export class TrabajoService {

 url = 'https://portfolio-backend-ha4y.onrender.com/trabajo/';
  constructor(private httpClient: HttpClient) {

   }

//ojo esto de [] ver si me lo trae con eso y tambien ojo los /trabajo/
   public lista(): Observable<Trabajo[]>{
    return this.httpClient.get<Trabajo[]>(this.url + 'lista');
  }


  public listaPer(id: number): Observable<Trabajo[]>{
    return this.httpClient.get<Trabajo[]>(this.url + `persona/${id}/lista`);
  }


  public detail(id: number):Observable<Trabajo>{
    return this.httpClient.get<Trabajo>(this.url + `detail/${id}`);
    }
  //ver lo de editar tanto heber como matias
    public save(trabajo: Trabajo):Observable<any>{
      return this.httpClient.post<any>(this.url + 'create', trabajo);
      }
  
    public editar(id:number, trabajo: Trabajo):Observable<any>{
      return this.httpClient.put<any>(this.url + 'update',trabajo );
      }
  
    public delete(id: number):Observable<any>{
      return this.httpClient.delete<any>(this.url + `delete/${id}`);
      }

 

}
