import { Credentials } from 'app/models/credentials';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Profesor } from 'app/models/profesor';
import { Mensaje } from 'app/models/mensaje';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
 
 
  private url = "http://localhost:8098/usuario"
  private urlProfesor = "http://localhost:8098/profesor"

  constructor(private http:HttpClient) { }

  /* Registrar: solo retorna el id del usuario */
  registrar(usuario:Usuario):Observable<Mensaje>{
    return this.http.post<Mensaje>(`${this.url}/registro`,usuario);
  }

  getUsuario(idUsuario:number):Observable<Usuario>{
    return this.http.get<Usuario>(`${this.url}/consultar-id/${idUsuario}`).pipe(
      map((data:Usuario) =>{
        const usuario:Usuario = {
          idUsuario: data['idUsuario'],
          nombre: data['nombre'],
          apellido1:data['apellido1'],
          apellido2:data['apellido2'],
          correo:data['correo'],
          password: data['password'],
          num_denuncias: data['num_denuncias'],
          idTipoUsuario:data['idTipoUsuario'],
          instPseudonimo: data['instPseudonimo'],
          admin_id:  data['admin_id'],
          prof_id:  data['prof_id'],
          tutor_id:  data['tutor_id'],
        };
        return usuario;
      })
    )
  }
  // getProfesorByIdProfesor

  getProfesorByEmail(correo: any):Observable<Profesor>{
    return this.http.post<Profesor>(`${this.urlProfesor}/consultar`, correo);
  }

  getProfesorByIdProfesor(idProfesor: number):Observable<Profesor>{
    return this.http.get<Profesor>(`${this.urlProfesor}/${idProfesor}/consultar`);
  }

  getIdProfesorByIdUsuario(idUsuario: number):Observable<number>{
    return this.http.get<number>(`${this.url}/${idUsuario}/obtener-idProfesor`);
  }

  getUsuarioByEmail(correo:String):Observable<Usuario>{
    return this.http.post<Usuario>(`${this.url}/consultar-correo`, correo);
  }


  actualizarDatos(usuario: Usuario):Observable<Usuario>{
    return this.http.put<Usuario>(`${this.url}/${usuario.idUsuario}/actualizar-datos`, usuario);
  }


  actualizarDatosCuenta(creds : Credentials, idUsuario: number ):Observable<Usuario>{
    return this.http.put<Usuario>(`${this.url}/${idUsuario}/actualizar-datos-cuenta`, creds);
  }


}
