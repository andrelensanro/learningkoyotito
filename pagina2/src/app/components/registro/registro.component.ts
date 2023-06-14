import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router} from '@angular/router';
import { Mensaje } from 'app/models/mensaje';
import { Usuario } from 'app/models/usuario';
import { UsuarioService } from 'app/services/usuario.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
})
export class RegistroComponent {
  private idUsuario!: number;
  usuario:Usuario={
    idUsuario: 0,
    nombre: '',
    apellido1: '',
    apellido2: '',
    correo: '',
    password: '',
    num_denuncias: 0,
    idTipoUsuario: 0,
    instPseudonimo: '',
    admin_id:0,
    prof_id:0,
    tutor_id:0,
  }

  public pseudonimo: boolean=true;
  public profesor: boolean=true;
  public texto: string="";

  constructor(
    public dialog: MatDialog,
    private toastr: ToastrService,
    private usuarioService:UsuarioService,
    private router:Router
  ){}

  guardarUsuario(){
    if(this.usuario.correo              !=''   && 
       this.usuario.nombre              !=''   && 
       this.usuario.apellido1           !=''   && 
       //this.usuario.instPseudonimo      !=''   && 
       this.usuario.correo              !=''   && 
       this.usuario.password            !=''
    ){

      if(this.profesor == false){
        this.usuario.idTipoUsuario = 2;
      }else
        this.usuario.idTipoUsuario = 3;
      
      this.usuarioService
      .registrar(this.usuario)
      .subscribe((msg:Mensaje) => {
        this.redireccionar(msg)
      });

    }else{
      this.toastr.error( "Proporciona la información requerida", 'Algo salió mal',{timeOut: 3500});
    }



  }

  redireccionar(msg: Mensaje){
    if(msg.tipo==1){ // significa que todo ha ido bien y se puede redireccionar
      this.router.navigate([`/home`]);
      this.toastr.success( "Registro completado exitosamente", 'Éxito',{timeOut: 7000});
      this.dialog.closeAll();
    }else{
      this.toastr.error( "Algún dato es erróneo", 'Algo salió mal',{timeOut: 3500});
    }
  }

  OpProf(){
    this.pseudonimo = true,
    this.profesor = false
  }

  OpTut(){
    this.pseudonimo = false,
    this.profesor = true
  }

  limpiar(){
    this.texto=''
  }
  campo=true
  menu2(){
    this.campo=false;
  }
}
