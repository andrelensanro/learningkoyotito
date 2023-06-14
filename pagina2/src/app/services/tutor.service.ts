import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tutorado } from 'app/models/tutorado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TutorService {

  private urlTutor = "http://localhost:8098/usuario"

  constructor(
    private http: HttpClient
  ) { }

  findTutoradoByEmailTutor(correoTutor:string, pseudonimo:string):Observable<Tutorado>{
    return this.http.post<Tutorado>(`${this.urlTutor}/consultar-tutorado/${pseudonimo}`, correoTutor);
  }
}
