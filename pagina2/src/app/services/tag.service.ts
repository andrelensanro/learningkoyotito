import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  private url = "http://localhost:8098/tag"
  constructor(private http:HttpClient) { }

  getAll():Observable<Object>{
    return this.http.get(`${this.url+"/consultar"}`);
  }
}
