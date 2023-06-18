import { Profesor } from 'app/models/profesor';
import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { CerrarSesionComponent } from '../../sesion/CerrarSesioncomponent';
import { CrearGrupoComponent } from '../Grupos/CrearGrupo.component';
import { ActivatedRoute, Router } from '@angular/router';
import { Clase } from 'app/models/clase';
import { JwtService } from 'app/jwt.service';
import { Mensaje } from 'app/models/mensaje';
import { UsuarioService } from 'app/services/usuario.service';
import { Usuario } from 'app/models/usuario';
import { ClaseService } from 'app/services/clase.service';
import { GrupoService } from 'app/services/grupo.service';
import { Grupo } from 'app/models/grupo';
import { Invitaciones } from 'app/models/invitacion';


@Component({
  selector: 'app-InicioProf',
  templateUrl: './InicioProf.component.html',
  styleUrls: ['../FondoP.component.scss', './InicioP.component.scss']
})
export class InicioProfComponent implements OnInit{
  public numInscritos:number=0;
  nameGrupo: string = '';
  constructor(
    public dialog: MatDialog,
    private usuarioService:UsuarioService,
    private jwtService: JwtService,
    private claseService: ClaseService,
    private grupoService: GrupoService,
    private activatedRoute:ActivatedRoute,
    private router:Router
  ){}

  public greaterThan(num: number) {    return num > 0;  }

  CrearGrupoDialog(): void{
    const dialogRef = this.dialog.open(CrearGrupoComponent, {
      data: {name: this.nameGrupo},
    });
    console.log(this.nameGrupo)
  }
  
  profesor:Profesor={
    idProfesor: 0,
    correoContacto: '',
    institucion:'',
    numFaltasTotales:0
  }
  clases:Clase[]=[
  //   {
  //     idClase:1,
  //   nombreClase:"Aprende las vocales",
  //   fecha: "05/05/2022",
  //   estado:"finalizado",
  //   numMeGusta:32,
  //   numTarjetas:16,
  //   numVisitas:45,
  //   numDenuncias: 0,
  //   isPapelera: false,
  //   idioma:"español",
  //   profesor:this.profesor
  // },
  // {
  //   idClase:2,
  //   nombreClase:"Mis primeros 10 numeros",
  //   fecha: "05/05/2022",
  //   estado:"finalizado",
  //   numMeGusta:9,
  //   numTarjetas:2,
  //   numVisitas:10,
  //   numDenuncias: 0,
  //   isPapelera: false,
  //   idioma:"español",
  //   profesor:this.profesor
  // },
  // {
  //   idClase:3,
  //   nombreClase:"Animals",
  //   fecha: "05/05/2022",
  //   estado:"finalizado",
  //   numMeGusta:87,
  //   numTarjetas:10,
  //   numVisitas:120,
  //   numDenuncias: 0,
  //   isPapelera: false,
  //   idioma:"english",
  //   profesor:this.profesor
  // }
  ]
  clase={
    idClase:0,
    nombreClase:'',
    fecha:'',
    estado:'', // finalizado o en proceso
    numMeGusta:0,
    numTarjetas:0,
    numVisitas:0,
    numDenuncias: 0,
    isPapelera: false,
    idioma: '',
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
    numAlumnos:0
  }
  grupos:Grupo[]=[
    // {
    //   idGrupo: 1,
    //   nombreGrupo: 'Grupo de Inglés',
    //   fechaCreacion: '22/22/2022',
    //   profesor: this.profesor,
    //   invitacion: this.invitaciones,
    // }
  ]
  email      : string = '';
  idUsuario  : number = 0;
  idProfesor : number = 0;
  idTutor    : number = 0;
  ngOnInit(): void {
    // traemos los identificadores del usuario en funcion del token 
    this.email       = this.jwtService.getEmail()!;
    this.idUsuario   =  parseInt(this.jwtService.getIdUsuario()!);
    this.idProfesor  = parseInt(this.jwtService.getIdProfesor()!);
    this.idTutor     =    parseInt(this.jwtService.getIdTutor()!);

    // Obtenemos los datos del profesor, para que se muestren del lado del front 
    this.usuarioService.getProfesorByEmail(this.email)
    .subscribe((profesor:Profesor) => this.profesor = profesor);
    
    // Obtenemos las clases del profesor, para que se muestren del lado del front 
    this.claseService.getAllByProfesor(this.idProfesor)
    .subscribe((clases:any) => {
      this.clases = clases;
    })

    // Obtenemos los grupos del profesor, para que se muestren del lado del front 
    this.grupoService.getAllByIdProfesor(this.idProfesor)
    .subscribe((grupos:any) => {
      this.grupos = grupos;
    }) 
  }

  CrearClase(){
    this.router.navigate([`profesor/${this.idProfesor}/crear-clase`]);
  }

  nav_grupoesp(idGrupo: number){
    this.router.navigate([`/profesor/${this.idProfesor}/grupo/${idGrupo}`]);
  }

}