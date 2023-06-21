import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from 'app/jwt.service';


@Component({
  selector: 'app-HeaderSidebarA',
  templateUrl: './HeaderSidebarA.component.html',
  styleUrls: ['./HeaderSidebarA.component.scss']
})
export class  HeaderSidebarAComponent{

  menuType: String = "General";
  idUsuario: number = 0

  constructor(
    private jwtService: JwtService,
    private router: Router,

  ) {}

  
  SelClase(valor:string): void{
    localStorage.setItem("clase",valor);
  }
  nav_tutorInicio(){
    // regresar al tutor logeado

    this.idUsuario = parseInt(this.jwtService.getIdUsuario()!)
    this.router.navigate([`tutor/${this.idUsuario}/inicio`])




    //localStorage.removeItem('token');
  }

}