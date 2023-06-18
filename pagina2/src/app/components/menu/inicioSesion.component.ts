
import { CookieService } from 'ngx-cookie-service';
import { COMPILER_OPTIONS, Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { AuthService } from '../services/authService.component'; 
import { UserDTO } from '../modelo/userDTO.model';
import { RegistroComponent } from '../registro/registro.component';
import { LoginService } from 'app/services/login.service';
import { UsuarioService } from 'app/services/usuario.service';
import { Router } from '@angular/router';
//import { Usuario } from 'src/app/models/usuario';
import { Usuario } from 'app/models/usuario';
import { Credentials } from '../../models/credentials';
import { ToastrService } from 'ngx-toastr';


@Component({
    selector: 'app-inicioSesion',
    templateUrl: 'inicioSesion.component.html',
    styleUrls: ['./inicioSesion.component.css']
  })


  
export class inicioSesionComponent{
  creds: Credentials = {
    correo:'',
    password : ''
  };
  usuario!:Usuario;
  public correo: string = "";

  constructor(
    public dialog: MatDialog,
    private usuarioService:UsuarioService, 
    private router:Router,
    private loginService:LoginService,
    private toastr: ToastrService,
  ){}

  login(): any{
    this.loginService.login(this.creds)
    .subscribe(token => {
      localStorage.setItem('token', JSON.parse(JSON.stringify(token))['jwtToken']);
      const c = localStorage.getItem('token');
      if(c != null){
        this.usuarioService.getUsuarioByEmail(this.creds.correo).subscribe((usr: Usuario) => {
          this.usuario = usr
          this.redirecccionarUsr(usr);
        })
      }
    }, (err) => this.toastr.error( "Algún dato fue erróneo.", 'Algo salió mal.',{timeOut: 7000}));
  }

  getToken(){
    return localStorage.getItem('token');
  }

  redirecccionarUsr(usr: Usuario){
    if(usr.idTipoUsuario == 2){
      this.router.navigate([`profesor/${usr.idUsuario}/inicio`])
      this.toastr.success( "Bienvenido profesor", 'Éxito',{timeOut: 7000});
      this.dialog.closeAll();
    }else if(usr.idTipoUsuario == 3){
      
      this.router.navigate([`tutor/${usr.idUsuario}/inicio`])
      this.toastr.success( "Bienvenido tutor", 'Éxito',{timeOut: 7000});
      this.dialog.closeAll();
    }
  }

  /* En caso de no tener una cuenta, lo redigire a un formulario de registro*/
  RegistroDialog(): void{
    const dialogRef = this.dialog.open(RegistroComponent, {
      //  data: {name: this.name},
    });
  }

}
