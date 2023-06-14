import { HttpResponse } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { Usuario } from './../models/usuario';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Credentials} from './../models/credentials';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  
  private url = "http://localhost:8098/usuario"

  constructor(private http:HttpClient) { }

  login(creds:Credentials){
    return this.http.post(`${this.url+"/login"}`,creds, {
      observe : 'response'
    }).pipe(map((response: HttpResponse<any>)=>{
      const body = response.body;
      const headers = response.headers;
      const bearerToken = headers.get('Authorization')!;
      // console.log("serv token full ", bearerToken)
      // console.log("serv json ", JSON.stringify(bearerToken).toString())
      // console.log("serv json ", JSON.stringify(bearerToken)['jwtToken'])
      // console.log("serv parse ", JSON.parse(JSON.stringify(bearerToken))['jwtToken'])
      return body;
    }))
  }

  getToken(){
    return localStorage.getItem('token');
  }

}
