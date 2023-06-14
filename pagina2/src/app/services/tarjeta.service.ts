import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tarjeta } from 'app/models/tarjeta'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TarjetaService {
  private url = "http://localhost:8098/tarjeta"

  constructor(private http:HttpClient) {
  }

  getAll(){
    return this.http.get(`${this.url}/tarjetas`);
  }


  create(tarjeta:Tarjeta){
    return this.http.post<Tarjeta>(`${this.url}+/crear`, tarjeta);
  }


  update(id:number, tarjeta:Tarjeta){
    return this.http.put(`${this.url}/${id}`, tarjeta);
  }

  delete(id: number){
    return this.http.delete(`${this.url}/${id}`)
  }



}
