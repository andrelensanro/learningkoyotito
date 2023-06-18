import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Mensaje } from 'app/models/mensaje';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DenunciaService {
  private url = "http://localhost:8098/clase"
  constructor(
    private http:HttpClient,

  ) {}

  denunciarClase(idClase:number, motivos:string[]):Observable<Mensaje>{
    var res = ''
    motivos.forEach(function(e){
      res = res.concat(e).concat(",")
    })
    return this.http.get<Mensaje>(`${this.url}/denunciar-clase/${idClase}`, {
      params: new HttpParams().set('motivo', res)
    })
  }



}
