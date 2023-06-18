import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tutorado } from 'app/models/tutorado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TutorService {

  private url = "http://localhost:8098/usuario"
  private urlTutor = "http://localhost:8098/tutor"

  constructor(
    private http: HttpClient
  ) { }

  findTutoradoByEmailTutor(correoTutor:string, pseudonimo:string):Observable<Tutorado>{
    return this.http.post<Tutorado>(`${this.url}/consultar-tutorado/${pseudonimo}`, correoTutor);
  }
  addTutorado(idTutor:number, pseudonimo: string):Observable<Tutorado>{
    return this.http.get<Tutorado>(`${this.urlTutor}/${idTutor}/crear-tutorado/${pseudonimo}`);
  }
  findAllTutorados(idTutor:number):Observable<any>{
    return this.http.get<any>(`${this.urlTutor}/${idTutor}/consultar-tutorados`);
  }

}
