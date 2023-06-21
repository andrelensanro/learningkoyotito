import { Injectable } from '@angular/core';
import { Archivo } from 'app/models/archivo';
import { Clase } from 'app/models/clase';
import { Profesor } from 'app/models/profesor';
import { Tarjeta } from 'app/models/tarjeta';
import { Usuario } from 'app/models/usuario';

@Injectable({
  providedIn: 'root'
})
export class ClaseDataService {
  
  archivos: Archivo[] = [];
  tarjetas: Tarjeta[] = [];
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
  
  get archivosCount():number {
    return this.archivos.length;
  }
  
  get tarjetasCount():number {
    return this.tarjetas.length;
  }

  addTarjeta(t: Tarjeta):void{
    this.tarjetas = [...this.tarjetas, t];
  }

  addArchivo(a: Archivo):void{
    this.archivos = [...this.archivos, a];
  }

  deleteTarjeta(tToDelete: Tarjeta): void{
    this.tarjetas = this.tarjetas.filter((t) => t !== tToDelete)
  }
  deleteArchivo(aToDelete: Archivo): void{
    this.archivos = this.archivos.filter((a) => a !== aToDelete)
  }
}
