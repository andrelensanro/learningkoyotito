import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Mensaje } from 'app/models/mensaje';
import { ClaseService } from 'app/services/clase.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-AprobarT',
  templateUrl: './Aprobar.component.html',
})
export class AprobarTComponent{

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {idClase: number},
    private claseService:ClaseService,
    private toastr: ToastrService,
    
  ) { }

  alumnos = new FormControl('');
  ListaAlumnos: string[] = ['alumno1', 'alumno 2', 'Alumno 3', 'Alumno 4', 'Alumno 5'];

  aprobarClase(){
    this.claseService.aprobarClase(this.data.idClase)
    .subscribe( ( mensaje:Mensaje ) => {
      if(mensaje.tipo == 1)
        this.toastr.success( mensaje.mensaje, 'Éxito',{timeOut: 7000});
      else 
        this.toastr.error( mensaje.mensaje, 'Error',{timeOut: 7000});

    })
  }


}