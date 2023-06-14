import { Clase } from 'app/models/clase';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { JwtService } from 'app/jwt.service';
import { ClaseService } from 'app/services/clase.service';
import { UsuarioService } from 'app/services/usuario.service';
import { Profesor } from 'app/models/profesor';
import { Usuario } from 'app/models/usuario';

@Component({
  selector: 'app-MeGustaP',
  templateUrl: './MeGustaP.component.html',
  styleUrls: ['../FondoP.component.scss', './MeGustaP.component.scss']
})
export class MeGustaPComponent implements OnInit
{

  constructor(
    private jwtService: JwtService,
    private claseService: ClaseService,
    private usuarioService:UsuarioService,
  ){}


  idProfesor:number = 0;
  idUsuario:number = 0;
  idClase:number = 0;
  autor : string = '';
  clases:Clase[] = [];

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

    this.idProfesor = parseInt(this.jwtService.getIdProfesor()!);
    this.idUsuario = parseInt(this.jwtService.getIdUsuario()!);

    this.claseService.getAllByProfesor(this.idProfesor)
    .subscribe(( clases : any ) => {
      this.clases = clases;
    })

    this.usuarioService.getProfesorByIdProfesor(this.idProfesor)
    .subscribe(( profesor : Profesor ) => {
      this.profesor = profesor;
      
    })

    this.usuarioService.getUsuario(this.idUsuario)
    .subscribe(( usuario: Usuario ) => {
      this.usuario = usuario;
      this.autor = this.usuario.nombre + " " + this.usuario.apellido1 + " " + this.usuario.apellido2
    })

    



  }
  
}