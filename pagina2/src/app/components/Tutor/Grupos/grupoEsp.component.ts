import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { InvitacionComponent } from './Invitacion.component';
import { Clase } from 'app/models/clase';
import { Profesor } from 'app/models/profesor';
import { ActivatedRoute, Router } from '@angular/router';
import { JwtService } from 'app/jwt.service';
import { ToastrService } from 'ngx-toastr';
import { GrupoService } from 'app/services/grupo.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-GrupoEsp',
  templateUrl: './grupoEsp.component.html',
  styleUrls: ['./grupoEsp.component.scss', '../FondoP.component.scss']
})
export class GrupoEspComponent implements OnInit{

  profesor:Profesor={
    idProfesor: 0,
    correoContacto: '',
    institucion:'',
    numFaltasTotales:0
  }
  clase : Clase = {
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
    profesor: this.profesor,
    asignatura: '',
  }
  clases:Clase[]=[]

  constructor(  
    public dialog: MatDialog,
    private router : Router,
    private jwtService:JwtService,
    private toastr: ToastrService,
    private grupoService: GrupoService,
    private route: ActivatedRoute
    
  ){}

  DInvitacion(): void {
    const dialogRef = this.dialog.open(InvitacionComponent, {
      data: { idGrupo : this.idGrupo },
    });
  }

  idGrupo : number = 0

  email      : string = '';
  idUsuario  : number = 0;
  idProfesor : number = 0;
  idTutor    : number = 0;

  ngOnInit():void{

    this.email       = this.jwtService.getEmail()!;
    this.idUsuario   = parseInt(this.jwtService.getIdUsuario()!);
    this.idProfesor  = parseInt(this.jwtService.getIdProfesor()!);
    this.idTutor     = parseInt(this.jwtService.getIdTutor()!);
    
    this.idGrupo = parseInt(this.route.snapshot.paramMap.get('idGrupo')!);


    this.grupoService.getAllClaseByIdGrupo(this.idGrupo)
    .subscribe(( clases : any[] ) => {
      this.clases = clases  
      // console.log("tamaño "+ this.clases.length)
    });
    
    
    this.dialog.closeAll();
  }

  nav_vistaprevia(idClase: number){
    this.router.navigate([`profesor/${this.idProfesor}/previa-mi-clase/${idClase}`])
  }




}