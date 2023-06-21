import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TutoradoListaService {


  tutorados: Array<Object>

  constructor(

  ) { 
    this.tutorados = []
  }

  agregarTutorados(_nuevoTutorado){
    this.tutorados.push(_nuevoTutorado)

  }

  mostrarTutorados(){
    if(this.tutorados.length > 0 ){
      return this.tutorados;
    }else{
      return false;
    }
  }



}
