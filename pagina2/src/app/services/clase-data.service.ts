import { Injectable } from '@angular/core';
import { Clase } from 'app/models/clase';
import { Profesor } from 'app/models/profesor';

@Injectable({
  providedIn: 'root'
})
export class ClaseDataService {

  clase: Clase
  tarjetas: Array<Object>
  profesor: Profesor

  constructor() { 
    this.tarjetas = []
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
  }

  



}
