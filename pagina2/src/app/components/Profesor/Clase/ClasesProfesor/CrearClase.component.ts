import { Usuario } from 'app/models/usuario';
import { HttpClient, HttpEventType, HttpResponse } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { of,Observable } from "rxjs";
import { CrearClaseService } from "./CrearClase.service";
import { FormControl } from "@angular/forms";
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


interface Leng {
  valor: string;
  viewValue: string;
}
var ImgHidden = false;
@Component({
    selector: 'app-CrearClase',
    templateUrl: "./CrearClase.component.html",
    styleUrls: ['./CrearClase.component.scss','../../FondoP.component.scss']
  })
  
export class CrearClaseComponent implements OnInit{
// ----------------------------------------------------------------------
  idiomas: Leng[] = [
    {valor: 'esp-1', viewValue: 'Español'},
    {valor: 'eng-2', viewValue: 'Inglés'},
  ];
  
  selectedFood = this.idiomas[1].valor;
  selectedFiles?: FileList;
  selectedFileNames: string[] = [];
  
  progressInfos: any[] = [];
  message: string[] = [];
  
  previews: string[] = [];
  imageInfos?: Observable<any>;
  
  grupos = new FormControl('');
  
  ListaGrupo: string[] = ['Grupo 1', 'Grupo 2', 'Grupo 3', 'Grupo 4', 'Grupo 5', 'Grupo 6'];
  
  itemsAsObjects = [{id: 0, name: 'Clase', readonly: true}];
  
  public imagePath;   /* viene todo el archivo */
  public message1!: string;
  imgURL: any; /*data de la imagen */
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
        console.log(this.tarjeta1.instruccion)
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

  archivos: Archivo[] = [];
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

  tarjetas: Tarjeta[] = [];

  tarjeta:Tarjeta = {
    idTarjeta: 0,
    instruccion: '',
    clave: '',
    tipoLetra: 'Arial',
    tamanio: 12,
    clase: this.clase
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
  
  email:string='';
  idUsuario:number=0;
  idProfesor:number=0;
  idTutor:number=0;
  instruccion:string='';
  clave:string='';
  nombrecompleto : string = ''
    

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
    
    ){}
      
    reset(){
      this.imgURL="";
    }
      
    changeInstruccion(abc: string){
      this.tarjeta.instruccion = abc
    }

    changeClave(abc: string){
      this.tarjeta.instruccion = abc
    }
    
    


    // resetArchivo(){
    //   this.tarjeta.idTarjeta = 0;
    //   this.tarjeta.instruccion = '';
    //   this.tarjeta.clave = '';
    //   this.tarjeta.tipoLetra = 'Arial';
    //   this.tarjeta.tamanio = 12;
    //   this.tarjeta.clase = this.clase;
    // }
    // resetTarjeta(){
    //   this.tarjeta = {
    //   idTarjeta: 0,
    //   instruccion: '',
    //   clave: '',
    //   tipoLetra: 'Arial',
    //   tamanio: 12,
    //   clase: this.clase
    //   }
    //}

    ngOnInit(): void {

       this.email = this.jwtService.getEmail()!;
       this.idUsuario =  parseInt(this.jwtService.getIdUsuario()!);
       this.idProfesor = parseInt(this.jwtService.getIdProfesor()!);
       this.idTutor =    parseInt(this.jwtService.getIdTutor()!);
       
       console.log(this.email)
       console.log(this.idUsuario)
       console.log(this.idProfesor)
       console.log(this.idTutor)

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

      this.archivo1.enlace      = this.imgURL;
      this.archivo1.profesor    = this.profesor;
      this.tarjeta1.instruccion = this.instruccion
      this.tarjeta1.clave       = this.clave
      this.tarjeta1.clase       = this.clase
      // console.log(this.archivo1)
      // console.log(this.tarjeta1)
      // this.archivos.push(this.archivo1);
      // this.tarjetas.push(this.tarjeta1);
      // console.log(this.archivo1)
      // console.log(this.tarjeta1)
      // console.log("archivos " + this.archivos.length)
      // console.log(this.archivos)
      // console.log("tarjetas " + this.tarjetas.length)
      // console.log(this.tarjetas)


    }

    guardarTarjeta(tarjeta, url, archivo, profesor, instruccion, clave){
      // guardarTarjeta(){
      archivo.enlace      = url;
      archivo.profesor    = profesor;
      tarjeta.instruccion = instruccion
      tarjeta.clave       = clave
      tarjeta.clase       = this.clase
      this.archivos.push(archivo);
      this.tarjetas.push(tarjeta);
      console.log("archivos " + this.archivos.length)
      console.log(this.archivos)
      console.log("tarjetas " + this.tarjetas.length)
      console.log(this.tarjetas)
      
    }

    editarTarjeta(tarjeta, url, archivo, profesor){
      this.toastr.success( "Editando", 'Éxito',{timeOut: 7000});
      // this.guardarTarjeta(tarjeta, url, archivo, profesor);
    }

    GuardarDialog(): void{
      const dialogRef = this.dialog.open(GuardarClaseComponent, { disableClose: true
        //  data: {name: this.name},
        });
    }

    CrearClase(){
      /*tomas las listas y creas cada objeto*/
      /*creas la clase*/
      this.toastr.success( "Clase creada con éxito", 'Éxito',{timeOut: 7000});
      console.log()
    }
}