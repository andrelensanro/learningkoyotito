import { Usuario } from 'app/models/usuario';
import { HttpClient, HttpEventType, HttpResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { GuardarClaseComponent } from "./GuardarClase.component";
import { MatDialog } from "@angular/material/dialog";
import { TagService } from "app/services/tag.service";
import { UsuarioService } from "app/services/usuario.service";
import { JwtService } from "app/jwt.service";
import { Profesor } from 'app/models/profesor';
import { ProfeService } from 'app/services/profe.service';
import { Clase } from 'app/models/clase';
import { Tarjeta } from 'app/models/tarjeta';
import { TarjetaService } from 'app/services/tarjeta.service';
import { Archivo } from 'app/models/archivo';
import { MediaService } from 'app/media/media.service';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { ManageDataService } from 'app/services/manage-data.service';
import { ClaseDataService } from 'app/services/clase-data.service';

interface Leng {
  valor: string;
  viewValue: string;
}
@Component({
    selector: 'app-CrearClase',
    templateUrl: "./CrearClaseV1.component.html",
    styleUrls: ['./CrearClase.component.scss','../../FondoP.component.scss']
  })
  
export class CrearClaseV1Component implements OnInit{
// ----------------------------------------------------------------------
  idiomas: Leng[] = [
    {valor: 'esp-1', viewValue: 'Español'},
    {valor: 'eng-2', viewValue: 'Inglés'},
  ];
  asignaturas: Leng[] = [
    {valor: '1', viewValue: 'Ciencias'},
    {valor: 'eng-2', viewValue: 'Inglés'},
  ];
  
  seleccionados : string [] = []
  indice: number = 0;
  selectedFood = this.idiomas[1].valor;
  selectedFiles?: FileList;
  selectedFileNames: string[] = [];
  itemsAsObjects = [{id: 0, name: 'Clase', readonly: true}];
  
  public imagePath;   /* viene todo el archivo */
  imgURL: any;        /*data de la imagen */
  format;
  
  autocompleteItemsAsObjects:any[] = [];
// ----------------------------------------------------------------------
    
    preview(files) {
      const file = files && files[0];
      if (files.length === 0)
      return;
      
      var reader = new FileReader();
      this.imagePath = file;
      reader.readAsDataURL(file); 
      
      if(file.type.indexOf('image')> -1){
        this.format = 'image';
      } else if(file.type.indexOf('video')> -1){
        this.format = 'video';
      }
      reader.onload = (event) => { 
        this.imgURL = (<FileReader>event.target).result;
        console.log(this.imagePath);
      }
    }
// -----------------------------------------------------------------------      
  profesor: Profesor = {
    idProfesor: 0,
    correoContacto:'',
    institucion:'',
    numFaltasTotales:0
  };
  clase: Clase = {
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
    profesor:this.profesor,
    asignatura: ''
  };
  usuario: Usuario = {
    idUsuario: 0,
    nombre: '',
    apellido1: '',
    apellido2: '',
    correo: '',
    password: '',
    num_denuncias: 0,
    idTipoUsuario: 2,
    instPseudonimo: '',
    admin_id:0,
    prof_id:0,
    tutor_id:0,
  };
  archivo1: Archivo ={
    idArchivo: 0,
    enlace: '',
    isPapelera: false,
    nombre: '',
    tipo: '',
    profesor: this.profesor,
  }
  archivo2: Archivo ={
    idArchivo: 0,
    enlace: '',
    isPapelera: false,
    nombre: '',
    tipo: '',
    profesor: this.profesor,
  }
  archivo3: Archivo ={
    idArchivo: 0,
    enlace: '',
    isPapelera: false,
    nombre: '',
    tipo: '',
    profesor: this.profesor,
  }
  archivo4: Archivo ={
    idArchivo: 0,
    enlace: '',
    isPapelera: false,
    nombre: '',
    tipo: '',
    profesor: this.profesor,
  }
  archivo5: Archivo ={
    idArchivo: 0,
    enlace: '',
    isPapelera: false,
    nombre: '',
    tipo: '',
    profesor: this.profesor,
  }
  tarjeta1:Tarjeta = {
    idTarjeta: 0,
    instruccion: '',
    clave: '',
    tipoLetra: 'Arial',
    tamanio: 12,
    clase: this.clase
  }
  tarjeta2:Tarjeta = {
    idTarjeta: 0,
    instruccion: '',
    clave: '',
    tipoLetra: 'Arial',
    tamanio: 12,
    clase: this.clase
  } 
  tarjeta3:Tarjeta = {
    idTarjeta: 0,
    instruccion: '',
    clave: '',
    tipoLetra: 'Arial',
    tamanio: 12,
    clase: this.clase
  }
  tarjeta4:Tarjeta = {
    idTarjeta: 0,
    instruccion: '',
    clave: '',
    tipoLetra: 'Arial',
    tamanio: 12,
    clase: this.clase
  }
  tarjeta5:Tarjeta = {
    idTarjeta: 0,
    instruccion: '',
    clave: '',
    tipoLetra: 'Arial',
    tamanio: 12,
    clase: this.clase
  }
  
  
  email:string='';
  idUsuario:number=0;
  idProfesor:number=0;
  idTutor:number=0;
  instruccion:string='';
  clave:string='';
  nombrecompleto : string = ''
  

  archivos: Archivo[] = []
  tarjetas: Tarjeta[] = []
  
  constructor(
    public dialog: MatDialog,
    private tagService: TagService,
    private usuarioService: UsuarioService,
    private profesorService: ProfeService,
    private tarjetaService: TarjetaService,
    private jwtService: JwtService,
    private mediaService: MediaService, 
    private route: ActivatedRoute,
    private toastr: ToastrService,
    public data: ManageDataService,
    private claseData: ClaseDataService
    
    ){} // end constructor
      
    reset(archivo: Archivo){
      archivo.enlace = this.imgURL;
      this.imgURL="";
    }


    ngOnInit(): void {

       this.email = this.jwtService.getEmail()!;
       this.idUsuario =  parseInt(this.jwtService.getIdUsuario()!);
       this.idProfesor = parseInt(this.jwtService.getIdProfesor()!);
       this.idTutor =    parseInt(this.jwtService.getIdTutor()!);
       
       this.usuarioService.getUsuarioByEmail(this.email!)
       .subscribe((usr:Usuario) => {
         this.usuario = usr
         this.nombrecompleto = this.usuario.nombre + " " + this.usuario.apellido1 + " " + this.usuario.apellido2
         console.log("usuario " + this.usuario)
        })
        
        this.usuarioService.getProfesorByIdProfesor(this.idProfesor)
        .subscribe((profesor:Profesor) => {
          this.profesor = profesor;
          console.log("profesor " + this.profesor)
        });

        // poblar el campo de los tags
        this.tagService.getAll()
        .subscribe((data:any )=> {
          this.autocompleteItemsAsObjects = data;
        })

    
    }//end OnInit


    upload(files){
      const file = files[0];
      if(file){
        const formData = new FormData();
        formData.append('file', file);
        this.mediaService.uploadFile(formData, this.idUsuario) // guardar el archivo en el repositorio local del administrador
        .subscribe( response => { // localizacion de la imagen 
          this.imgURL = response.url;
        })
      }
    } // end upload

    get allTarjetas():Tarjeta[]{
      return this.claseData.tarjetas;
    }

    get allArchivos():Archivo[]{
      return this.claseData.archivos;
    }

    addTarjeta(_newtarjeta: Tarjeta):void{
      _newtarjeta.clase = this.clase
      this.claseData.addTarjeta(_newtarjeta)
    }

    addArchivo(_newarchivo: Archivo): void{
      _newarchivo.profesor = this.profesor
      this.claseData.addArchivo(_newarchivo)
    }
   
    GuardarDialog(): void{
      const dialogRef = this.dialog.open(GuardarClaseComponent, { disableClose: true
          // data: {name: this.name},
        });
    }
    public onSelect(item) {
      this.seleccionados.push(item) 
    }



    CrearClase(){
      
      this.seleccionados.forEach(element => {
        console.log("tag " + element)
      });



      console.log("archivos ");

      this.allArchivos.forEach(element => {
        console.log(element)
      });
      
      console.log("tarjetas ");

      this.allTarjetas.forEach(element => {
        console.log(element)
      });
      
      this.toastr.success( "Clase creada con éxito", 'Éxito',{timeOut: 7000});
     
    }
}