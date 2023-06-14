import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Invitaciones } from 'app/models/invitacion';
import { Tutorado } from 'app/models/tutorado';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InvitacionService {
  private url = "http://localhost:8098"
  private urlGrupo = "http://localhost:8098/grupo"
  constructor(
    private http: HttpClient,

  ) { }

  getInvitacionByIdGrupo(idGrupo: number):Observable<Invitaciones>{
    return this.http.get<Invitaciones>(`${this.urlGrupo}/${idGrupo}/gen-invitacion`);
  }

  enviarInvitacion(idInvitacion:number, tutorado: Tutorado):Observable<any>{
    return this.http.post<any>(`${this.urlGrupo}/${idInvitacion}/enviar-invitacion`, tutorado);
  }


}
