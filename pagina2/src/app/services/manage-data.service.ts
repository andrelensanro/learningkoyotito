import { Injectable } from '@angular/core';
import { Elemento } from 'app/models/elemento';

@Injectable({
  providedIn: 'root'
})
export class ManageDataService {
  elementos : Array<Elemento>
  elemento : Elemento;
  constructor(
  ){
    this.elementos = []
    this.elemento = {
      clave: '',
      url:'',
      tipo:'',
      instruccion: '',
    }
    this.elementos.push(this.elemento)
  }

  anterior(icurrent:number, ecurrent: Elemento){
    // indexado en 0
    let elemAct = this.elementos.length - 1;

    if(ecurrent.clave!=null && ecurrent.instruccion!=null && icurrent > elemAct ){
      this.elementos.push(ecurrent);
    }

    if(icurrent - 1 >= 0)
      return this.elementos[icurrent-1];

    return ecurrent; // retorna falso cuando ya no hay mas cartas a la izquierda 
  }

  siguiente(icurrent:number, ecurrent: Elemento){

    let elemAct = this.elementos.length - 1;

    if(ecurrent.clave!=null && ecurrent.instruccion!=null && icurrent > elemAct ){
      this.elementos.push(ecurrent);

      return this.elemento;
    }
    return this.elementos[icurrent+1];
  }




}
