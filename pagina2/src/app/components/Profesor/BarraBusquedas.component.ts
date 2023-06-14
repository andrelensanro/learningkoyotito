import { ClaseService } from './../../services/clase.service';
import { InicioTComponent } from './../Tutor/InicioT.component';
import { Component, Inject, OnInit } from '@angular/core';
import { MenuComponent } from '../menu/menu.component';
import { Clase } from 'app/models/clase';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-BarraBusquedas',
  templateUrl: './BarraBusquedas.component.html',
  styleUrls: ['./BarraBusquedas.component.scss']
})
export class BarraBusquedasComponent{
  institucion: string = '';
  titulo: string = '';
  autor: string = '';
  tags: string = '';
  list : Clase [] = [];
  constructor(
    private claseService:ClaseService,
    private toastr: ToastrService,
  ){}
  
  changeTitulo(abc: string){
    this.titulo = abc
  }

  changeAutor(abc: string){
    this.autor = abc
  }

  changeInstitucion(abc: string){
    this.institucion = abc
  }
  changeTags(abc: string){
    this.tags = abc
  }

  findByTitulo(){
    if(this.titulo!=''){
      this.claseService.findByTitulo(this.titulo).subscribe((lista:any) => this.list = lista)
      console.log(this.list)
    }else{
      this.toastr.error( "Por favor ingresa el tiutlo de la clase que desees ver", 'Error',{timeOut: 7000});
    }
  }
  findByInstitucion(){
    if(this.institucion!=''){
      this.claseService.findByInstitucion(this.institucion).subscribe((lista:any) => this.list = lista)
      console.log(this.list)
    }else{
      this.toastr.error( "Por favor ingresa la institución", 'Error',{timeOut: 7000});
    }
    
  }
  findByAutor(){
    if(this.institucion!=''){
      this.claseService.findByAutor(this.autor).subscribe((lista:any) => this.list = lista)
      console.log(this.list)
    }else{
      this.toastr.error( "Por favor ingresa el autor de las clase que desees ver", 'Error',{timeOut: 7000});
    }
  }
  
  
}