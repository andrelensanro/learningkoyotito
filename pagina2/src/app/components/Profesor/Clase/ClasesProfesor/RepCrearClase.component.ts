import { Tarjeta } from 'app/models/tarjeta';
import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { Clase } from 'app/models/clase';
import { Profesor } from 'app/models/profesor';


@Component({
    selector: 'app-RepCrearClase',
    templateUrl: "./RepCrearClase.component.html",
    styleUrls: ['./RepCrearClase.component.scss']
  })
  
  export class RepCrearClaseComponent{
    previews: string[] = [];
    grupos = new FormControl('');

  ListaGrupo: string[] = ['Grupo 1', 'Grupo 2', 'Grupo 3', 'Grupo 4', 'Grupo 5', 'Grupo 6'];
    
  profesor: Profesor ={
    idProfesor: 0,
    correoContacto: '',
    institucion:'',
    numFaltasTotales:0
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
    profesor: this.profesor,
    asignatura: ''
  }
  datos:Tarjeta = {
      idTarjeta: 0,
      instruccion: '',
      clave: '',
      tipoLetra: 'Arial',
      tamanio: 12,
      clase: this.clase
    }; 
}


  // export class Tarjeta{
  //   TipoLetra: string = "Arial";
  //   TamLetra: string = "12";
  //   Instruccion : string | undefined;
  //   Respuesta: string | undefined;
  //   Idioma: string = "Español";
  //   Titulo: string | undefined;
  //   Tags: string | undefined;
  // }