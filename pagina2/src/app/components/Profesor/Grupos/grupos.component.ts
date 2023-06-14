import { Component, Inject, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { JwtService } from 'app/jwt.service';
import { Grupo } from 'app/models/grupo';
import { Invitaciones } from 'app/models/invitacion';
import { Profesor } from 'app/models/profesor';
import { Usuario } from 'app/models/usuario';
import { GrupoService } from 'app/services/grupo.service';
import { UsuarioService } from 'app/services/usuario.service';
@Component({
  selector: 'app-Grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.scss', '../FondoP.component.scss']
})
export class GruposComponent implements OnInit{
  

  constructor(
    private grupoService: GrupoService,
    private usuarioService: UsuarioService,
    private jwtService: JwtService,
    private router: Router,
    
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
      
      this.email       = this.jwtService.getEmail()!;
      this.idUsuario   =  parseInt(this.jwtService.getIdUsuario()!);
      this.idProfesor  = parseInt(this.jwtService.getIdProfesor()!);
      this.idTutor     =    parseInt(this.jwtService.getIdTutor()!);

      const auth = this.jwtService.getEmail();

      this.usuarioService.getProfesorByEmail(auth!)
      .subscribe((profesor:Profesor) => {
      this.profesor = profesor;
      });


      this.usuarioService.getUsuarioByEmail(auth!)
      .subscribe((usuario:Usuario) => {this.usuario = usuario})

          // Obtenemos los grupos del profesor, para que se muestren del lado del front 
      this.grupoService.getAllByIdProfesor(this.idProfesor)
      .subscribe((grupos:any) => {
        this.grupos = grupos;
      }) 
    }

    nav_grupoesp(idGrupo: number){
      this.router.navigate([`/profesor/${this.idProfesor}/grupo/${idGrupo}`]);
    }
  
  }