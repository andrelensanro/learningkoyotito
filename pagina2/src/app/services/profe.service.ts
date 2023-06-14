import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Profesor } from 'app/models/profesor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfeService {

  private url = "http://localhost:8098/profesor"

  constructor(private http:HttpClient) {
  }

  getProfesor(idUsuario: number):Observable<Profesor>{
    return this.http.get<Profesor>(`${this.url}/${idUsuario}`);
  }

  actualizarCorreoContacto(profesor: Profesor):Observable<Profesor>{
    return this.http.put<Profesor>(`${this.url}/${profesor.idProfesor}/actualizar-correo`, profesor);
  }

}
