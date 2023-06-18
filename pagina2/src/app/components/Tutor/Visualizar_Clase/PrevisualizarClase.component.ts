import { UsuarioService } from './../../../services/usuario.service';

import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { ToastrService } from "ngx-toastr";
import { DenunciasTComponent } from "../Denuncias/Denuncias.component";
import { AprobarTComponent } from "../Aprobar/Aprobar.component";
import { Clase } from "app/models/clase";
import { Profesor } from "app/models/profesor";
import { Usuario } from "app/models/usuario";
import { JwtService } from "app/jwt.service";
import { ClaseService } from "app/services/clase.service";
import { ActivatedRoute } from "@angular/router";
import { ProfeService } from 'app/services/profe.service';


@Component({
    selector: 'app-PrevisualizarClase',
    templateUrl: './PrevisualizarClase.component.html',
    styleUrls: ['./PrevisualizarClase.component.scss', '../FondoT.component.scss','../Denuncias/Denuncias.component.scss']
  })
  export class  PrevisualizarClaseTComponent implements OnInit{
    idClase:number = 0
    motivo:string = ''
    form!: FormGroup;
    toppings = new FormControl('');
    toppingList: string[] = ['Contenido inapropiado', 'Texto erróneo', 'Contenido ofensivo', 'Imagen errónea', 'No se distingue la imagen'];
    disabled = true;
    items = ['Javascript', 'Typescript'];

    clase : Clase;
    profesor: Profesor;
    usuario: Usuario;
    parametro: string;
    idUsuario: number;
    tags: string[] = ['español', 'básico', 'vocabulario']

    constructor(
      private http: HttpClient, 
      private toastr: ToastrService, 
      public dialog: MatDialog,
      private jwtService: JwtService,
      private claseService: ClaseService,
      private route: ActivatedRoute,
      private usuarioService: UsuarioService,
      private profeService:ProfeService
    ) {
        this.form = new FormBuilder().group({
            chips: [['chip'], []]
        });
        this.idUsuario = 0
        this.parametro = ''
        this.tags 
        this.profesor = {
          idProfesor: 0,
          numFaltasTotales : 0,
          institucion: '',
          correoContacto: ''
        }
        this.clase = {
          idClase:0,
          nombreClase:'',
          fecha:'',
          estado:'', 
          numMeGusta:0,
          numTarjetas:0,
          numVisitas:0,
          numDenuncias: 0,
          isPapelera: false,
          idioma: '',
          asignatura : '',
          profesor : this.profesor,
        }
        this.usuario = {
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
    }

    ngOnInit(){
      this.idUsuario = parseInt(this.jwtService.getIdUsuario()!);

      
      this.route.paramMap.subscribe(params => {
        this.parametro = params.get('idClase')!;
        
        var idClase = parseInt(this.parametro)
        
        this.claseService.findTagByIdClase(idClase)
        .subscribe( ( tags: string[] ) => this.tags = tags)
        
        
        this.claseService.findById(idClase)
        .subscribe( (clase: Clase) => {
          
          this.clase = clase;
        
          var idProfesor = this.clase.profesor.idProfesor
          
          this.usuarioService.getUsuarioByIdProfesor(idProfesor)
          .subscribe( (usuario: Usuario) => this.usuario = usuario )
        
        
        })
        



      });
    }



    DenunciaDialog(): void{
      const dialogRef = this.dialog.open(DenunciasTComponent, {
          data: { 
              idClase: this.idClase,
              motivo: this.motivo,
            },
        });
    }
    AprobarDialog(): void{
      const dialogRef = this.dialog.open(AprobarTComponent, {
        data: { 
          idClase: this.idClase,
      }});
    }
  }




  // MeGusta(){
  //   this.toastr.success('Guardado en Me gusta.', 'Éxito',{timeOut: 7000});
  // }