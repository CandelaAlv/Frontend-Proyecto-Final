import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Habilidad } from '../model/habilidad';

@Injectable({
  providedIn: 'root'
})
export class HabilidadService {
  url = 'https://portfolio-backend-ha4y.onrender.com/habilidad/';
  constructor(private httpClient: HttpClient) { 


    
  }



  public lista(): Observable<Habilidad[]>{
    return this.httpClient.get<Habilidad[]>(this.url + 'lista');
  }

  public listaPer(id: number): Observable<Habilidad[]>{
    return this.httpClient.get<Habilidad[]>(this.url + `persona/${id}/lista`);
  }

  public detail(id: number):Observable<Habilidad>{
  return this.httpClient.get<Habilidad>(this.url + `detail/${id}`);
  }
 
  public save(habilidad: Habilidad):Observable<any>{
    return this.httpClient.post<any>(this.url + 'create', habilidad);
    }

    public editar(id:number, habilidad: Habilidad):Observable<any>{
      return this.httpClient.put<any>(this.url + 'update',habilidad );
      }

  public delete(id: number):Observable<any>{
    return this.httpClient.delete<any>(this.url + `delete/${id}`);
    }


}
