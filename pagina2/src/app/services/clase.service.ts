import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Clase } from '../models/clase';
import { HttpClient } from '@angular/common/http';
import { UsuarioService } from './usuario.service';

@Injectable({
  providedIn: 'root'
})
export class ClaseService {
  private url = "http://localhost:8098/clase"
  private urlProfesor = "http://localhost:8098/profesor"
  private urlHome = "http://localhost:8098"

  constructor(
    private http:HttpClient
  ) { }

  create(clase:Clase):Observable<Object>{
    return this.http.post(`${this.url}/crear`,clase);
  }

  edit(clase:Clase):Observable<Object>{
    return this.http.post(`${this.url}/editar`,clase);
  }
  // A partir del id del profesor retorna todas las clases como profesor
  getAllByProfesor(idProfesor:number):Observable<Object>{
    return this.http.get(`${this.urlProfesor}/${idProfesor}/buscar-clases`);
  }

  findByTitulo(titulo: string){
    return this.http.get(`${this.urlHome}/filtrar/tituloclase/${titulo}`)
  }

  findByAutor(autor: string){
    return this.http.get(`${this.urlHome}/filtrar/autor/${autor}`)
  }

  findByInstitucion(institucion: string){
    return this.http.get(`${this.urlHome}/filtrar/institucion/${institucion}`)
  }

  getNumVisitas(idClase: number){
    return this.http.get(`${this.url}/clase/${idClase}/getNumVisitas`)
  }


}
