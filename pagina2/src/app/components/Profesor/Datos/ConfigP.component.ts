import { UsuarioService } from 'app/services/usuario.service';
import { Component, OnInit } from '@angular/core';
import { Profesor } from 'app/models/profesor';
import { Usuario } from 'app/models/usuario';
import { JwtService } from 'app/jwt.service';
import { Mensaje } from 'app/models/mensaje';
import { ToastrService } from 'ngx-toastr';
import { ProfeService } from 'app/services/profe.service';
import { Credentials } from '../../../models/credentials';


@Component({
  selector: 'app-ConfigP',
  templateUrl: './ConfigP.component.html',
  styleUrls: ['.././FondoP.component.scss', './ConfigP.component.scss']
})
export class ConfigPComponent implements OnInit{
  password1:string = '';
  password2:string = '';
  menuType: String = "General";

  constructor(
    private usuarioService:UsuarioService,
    private jwtService:JwtService,
    private toastr: ToastrService,
    private profesorService:ProfeService
    ) {}
    profesor:Profesor={
      idProfesor: 0,
      correoContacto: '',
      institucion:'',
      numFaltasTotales:0
    }
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

  ngOnInit(): void {

    const auth = this.jwtService.getEmail();

    // console.log("email del usuario loggeado " + auth!);

    this.usuarioService.getUsuarioByEmail(auth!)
    .subscribe((usuario:Usuario) => this.usuario = usuario);


    this.usuarioService.getProfesorByEmail(auth!)
      .subscribe((profesor:Profesor) => this.profesor = profesor);


      // console.log(this.profesor.correoContacto)
      // console.log(this.profesor.institucion)
      // console.log(this.profesor.numFaltasTotales)
      // console.log(this.profesor.idProfesor)
      

    
  }

  changeNombre(abc: string){
    this.usuario.nombre = abc
  }
  changeApellido1(abc: string){
    this.usuario.apellido1 = abc
  }
  changeApellido2(abc: string){
    this.usuario.apellido2 = abc
  }
  changeCorreoContacto(abc: string){
    this.profesor.correoContacto = abc
  }
  actualizarDatos(){
    this.usuario.nombre="Mario";
    this.usuarioService
    .actualizarDatos(this.usuario)
    .subscribe( (usuario) =>{
      console.log(usuario.idUsuario)
      if(usuario!=null){
        this.toastr.success("Datos actualizados", 'Éxito',{timeOut: 17000});
      }else{
        this.toastr.error( "Ocurrió un problema, por el momento no es posible cambiar sus datos", 'Error',{timeOut: 7000});
      }
    });
  }
  actualizarCorreoContacto(){
    //this.profesor.correoContacto = "mario.sanchez@gmail.com"; /*Este cambio lo hago yo desde aqui porque no me deja escribir en el input*/
    this.profesorService
    .actualizarCorreoContacto(this.profesor)
    .subscribe((profesor)=>{
      if(profesor!=null){
        this.toastr.success("Datos actualizados", 'Éxito',{timeOut: 17000});
      }else{
        this.toastr.error( "Ocurrió un problema, por el momento no es posible cambiar sus datos", 'Error',{timeOut: 7000});
      }
    })
  }
  eliminarCorreoContacto(){
    this.profesor.correoContacto = "";
    this.profesorService
    .actualizarCorreoContacto(this.profesor)
    .subscribe((profesor)=>{
      if(profesor!=null){
        this.toastr.success("Se elimino correctamente", 'Éxito',{timeOut: 17000});
      }else{
        this.toastr.error( "Ocurrió un problema, por el momento no es posible eliminar su correo", 'Error',{timeOut: 7000});
      }
    })
  }

  changeCorreo(abc: string){
    this.usuario.correo = abc
  }
  
  creds: Credentials= {
    correo: '',
    password: ''
  }
  actualizarDatosCuenta(){
    //this.password1 = this.password2 = "12345" /** Temporal, ya que no me deja escribir */
    if(this.password1 == this.password2){

      this.creds.correo = this.usuario.correo;
      this.creds.password = this.password1;

      this.usuarioService.actualizarDatosCuenta(this.creds, this.usuario.idUsuario)
      .subscribe((usuario)=>{
        if(usuario!= null){
          this.toastr.success("Se modificó los datos de su cuenta correctamente", 'Éxito',{timeOut: 17000});
        }else{
          this.toastr.error( "Ocurrió un problema, por el momento no es posible eliminar su correo", 'Error',{timeOut: 7000});
        }
      })

    }else{
      this.toastr.error( "Las contraseñas no son iguales, verifícalo", 'Error',{timeOut: 7000});
    }


  }

}