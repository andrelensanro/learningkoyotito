import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Route, Router } from '@angular/router';
import { JwtService } from 'app/jwt.service';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-HeaderSidebarT',
  templateUrl: './HeaderSidebarT.component.html',
  styleUrls: ['./HeaderSidebarT.component.scss']
})
export class  HeaderSidebarTComponent implements OnInit{
  menuType: String = "General";
  constructor(
    public dialog: MatDialog,
    private jwtService:JwtService,
    private toastr: ToastrService,
    private router: Router,
  ) {}

  // SelClase(valor:string): void{
  //   localStorage.setItem("clase",valor);
  // }
  
  CerrarSesion(){
    localStorage.removeItem('token');
    location.reload()
  }

  email      : string = '';
  idUsuario  : number = 0;
  idTutor    : number = 0;
  rol        : string = ''
ngOnInit(): void {
  // traemos los identificadores del usuario en funcion del token 
  this.email       = this.jwtService.getEmail()!;
  this.idUsuario   =  parseInt(this.jwtService.getIdUsuario()!);
  this.idTutor     =    parseInt(this.jwtService.getIdTutor()!);

}

nav_config(){

  this. rol = this.jwtService.getRol()!['authority'];

  if(this.rol === 'ROLE_TUTOR')
    this.router.navigate([`/tutor/${this.idUsuario}/config`]);

}

nav_Tutorinicio(){
  this.router.navigate([`/tutor/${this.idTutor}/inicio`]);

}


nav_tutor_grupos(){
  this.router.navigate([`tutor/${this.idTutor}/ver-grupos`]);
}



}