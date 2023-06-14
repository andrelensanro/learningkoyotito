import { Usuario } from './../../../models/usuario';
import { Component, OnInit } from '@angular/core';
import { JwtService } from 'app/jwt.service';
import { Credentials } from 'app/models/credentials';
import { Mensaje } from 'app/models/mensaje';
import { Tutor } from 'app/models/tutor';
import { UsuarioService } from 'app/services/usuario.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-ConfigT',
  templateUrl: './ConfigT.component.html',
  styleUrls: ['.././FondoT.component.scss', './ConfigT.component.scss']
})
export class ConfigTComponent implements OnInit{
  menuType: String = "General";
  password1:string = '';
  password2:string = '';
  
  constructor(
    private usuarioService:UsuarioService,
    private jwtService:JwtService,
    private toastr: ToastrService,

  ) {}

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
  tutor: Tutor ={
    idTutor : 0,
    numTutorados: 1,
  }

  email      : string = '';
  idUsuario  : number = 0;
  idProfesor : number = 0;
  idTutor    : number = 0;
  ngOnInit(): void {
    // traemos los identificadores del usuario en funcion del token 
    this.email       = this.jwtService.getEmail()!;
    this.idUsuario   = parseInt(this.jwtService.getIdUsuario()!);
    this.idProfesor  = parseInt(this.jwtService.getIdProfesor()!);
    this.idTutor     = parseInt(this.jwtService.getIdTutor()!);

    const auth = this.jwtService.getEmail();

    this.usuarioService.getUsuarioByEmail(auth!)
    .subscribe((usuario:Usuario) => this.usuario = usuario);

    this.usuarioService.getTutorByIdTutor(this.idTutor)
    .subscribe( (tutor:Tutor) => {
      this.tutor = tutor;
    })

    
    
    
    
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
changeCorreo(abc: string){
  this.usuario.correo = abc
}
actualizarDatos(){
  // this.usuario.nombre="Mario";
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
  eliminar_cuenta(){
    this.usuarioService.deleteUsuarioById(this.idUsuario)
    .subscribe((msg:Mensaje) => {
      if(msg.tipo==1){
        this.toastr.success("Se elimino la cuenta :( esperamos que vuelvas pronto.", 'Koyotito',{timeOut: 17000});
      }else{
        this.toastr.error( "En este momento no es posible eliminar tu cuenta", 'Koyotito',{timeOut: 7000});
      }
    });
  }



  nav_inicio(){
    localStorage.removeItem('token');
    location.reload()
  }




}