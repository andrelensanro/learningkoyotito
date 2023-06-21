import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';
import { Mensaje } from 'app/models/mensaje';
import { DenunciaService } from 'app/services/denuncia.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-DenunciasT',
  templateUrl: './Denuncias.component.html',
  styleUrls: ['./Denuncias.component.scss']
})


export class DenunciasTComponent{

  seleccionados:string[]=[];
  toppings = new FormControl('');
  toppingList: string[] = ['Contenido inapropiado', 'Texto erróneo', 'Contenido ofensivo', 'Imagen errónea', 'No se distingue la imagen'];

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {idClase: number, motivo: string},
    private toastr: ToastrService,
    private denunciasService: DenunciaService,



  ) { }

  onChangeValue() {
    this.isDisabled();
  }

  isDisabled() {
  
  }

  denunciarClase(){
    this.denunciasService.denunciarClase(this.data.idClase, this.seleccionados)
    .subscribe( ( mensaje:Mensaje ) => {
      if(mensaje.tipo==1)
        this.toastr.success(mensaje.mensaje, 'Éxito',{timeOut: 7000});
      else
        this.toastr.error(mensaje.mensaje, 'Error',{timeOut: 7000});
    })
  
  }






}