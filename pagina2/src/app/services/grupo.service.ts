import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Clase } from 'app/models/clase';
import { Grupo } from 'app/models/grupo';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrupoService {
  private url = "http://localhost:8098"
  private urlGrupo = "http://localhost:8098/grupo"
  constructor(
    private http: HttpClient,


  ) { }

    getAllByIdProfesor(idProfesor:number):Observable<Grupo[]>{
      console.log("id del profesor dentro de grupo service " + idProfesor)
      return this.http.get<Grupo[]>(`${this.url}/profesor/${idProfesor}/buscar-grupos`);
    }

    numTutoradoGrupo(idGrupo:number):Observable<number>{
      return this.http.get<number>(`${this.url}/profesor/detalle-grupo-insc/${idGrupo}`)
    }

    save(grupo: Grupo):Observable<Grupo>{
      return this.http.post<Grupo>(`${this.url}/profesor/crear-grupo`, grupo)
    }

    numClasesGrupo(idGrupo: number):Observable<number>{
      return this.http.get<number>(`${this.urlGrupo}/${idGrupo}/contar-clases`)
    }

    // numAlumnosGrupo(idGrupo: number):Observable<number>{
    //   return this.http.get<number>(`${this.urlGrupo}/${idGrupo}/contar-alumnos`)
    // }

    getAllClaseByIdGrupo(idGrupo:number):Observable<any[]>{
      return this.http.get<any[]>(`${this.urlGrupo}/${idGrupo}/buscar-clases`);
    }

    

}
