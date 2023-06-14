import { LoginService } from 'app/services/login.service';
import { Injectable, NgModule } from '@angular/core';
import jwt_decode from 'jwt-decode';
@Injectable({
  providedIn: 'root'
})
@NgModule()
export class JwtService {

  constructor(
    private loginService:LoginService
  ) { }

  DecodeToken():string | null{
    const token = this.loginService.getToken();
    if(token != null)
      return jwt_decode(token);
    return null;
  }

  getRol():string | null{
    const dtoken = this.DecodeToken()
    if(dtoken != null)
      return JSON.parse(JSON.stringify(dtoken))['rol'];
    return null;
  }
  
  getIdProfesor():string | null{
    const dtoken = this.DecodeToken()
    if(dtoken != null)
      return JSON.parse(JSON.stringify(dtoken))['idp'];
    return null;
  }
  
  getIdTutor():string | null{
    const dtoken = this.DecodeToken()
    if(dtoken != null)
      return JSON.parse(JSON.stringify(dtoken))['idt'];
    return null;
  }

  getIdUsuario():string | null{
    const dtoken = this.DecodeToken()
    if(dtoken != null)
      return JSON.parse(JSON.stringify(dtoken))['idd'];
    return null;
  }
  
  getEmail():string | null{
    const dtoken = this.DecodeToken()
    if(dtoken != null)
      return JSON.parse(JSON.stringify(dtoken))['sub'];
    return null;
  }
}
