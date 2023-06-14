import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InvitacionComponent } from './Invitacion.component';
import { UsuarioService } from 'app/services/usuario.service';
import { JwtService } from 'app/jwt.service';
import { Invitaciones } from 'app/models/invitacion';
import { Grupo } from 'app/models/grupo';
import { Usuario } from 'app/models/usuario';
import { Profesor } from 'app/models/profesor';
import { GrupoService } from 'app/services/grupo.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';


@Component({
  selector: 'app-CrearGrupo',
  templateUrl: './crearGrupo.component.html',
})
export class CrearGrupoComponent implements OnInit{
  
  idGrupo:number = 0
  nombreGrupo:string=''
  constructor(
    private usuarioService:UsuarioService,
    private jwtService: JwtService,
    private grupoService: GrupoService,
    private toastr: ToastrService,
    private router:Router
    
  ){}
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
  invitaciones: Invitaciones={
    id_invitacion: 0,
    url_invitacion: '',
  }
  grupo:Grupo = {
    idGrupo: 0,
    nombreGrupo: '',
    fechaCreacion: '',
    profesor: this.profesor,
    invitacion: this.invitaciones,
    numAlumnos:0,
  }
  grupos:Grupo[]=[
    {
      idGrupo: 1,
      nombreGrupo: 'Grupo de Inglés',
      fechaCreacion: '22/22/2022',
      profesor: this.profesor,
      invitacion: this.invitaciones,
      numAlumnos:0,
    }
  ]
  email      : string = '';
  idUsuario  : number = 0;
  idProfesor : number = 0;
  idTutor    : number = 0;


  ngOnInit(): void {
  
    this.email       = this.jwtService.getEmail()!;
    this.idUsuario   =  parseInt(this.jwtService.getIdUsuario()!);
    this.idProfesor  = parseInt(this.jwtService.getIdProfesor()!);
    this.idTutor     =    parseInt(this.jwtService.getIdTutor()!);
    
    this.usuarioService.getProfesorByEmail(this.email!)
    .subscribe((profesor:Profesor) => this.profesor = profesor);

    this.usuarioService.getUsuarioByEmail(this.email!)
    .subscribe((usuario:Usuario) => this.usuario = usuario)
  }
  
  CrearGrupo(){
    this.grupo.nombreGrupo = this.nombreGrupo
    this.grupo.profesor = this.profesor
    this.grupoService.save(this.grupo)
    .subscribe((grupo:Grupo) => {
      if(grupo!=null){
        this.toastr.success("Grupo creado de manera exitosa", 'Éxito',{timeOut: 7000});
        this.grupo = grupo
        this.idGrupo = this.grupo.idGrupo
        console.log(this.idGrupo);
        this.router.navigate([`profesor/${this.idProfesor}/grupo/${this.idGrupo}`])
      }else{

        this.toastr.error( "No es posible crear un grupo en este momento", 'Error',{timeOut: 7000});
      }
    });
  }



}