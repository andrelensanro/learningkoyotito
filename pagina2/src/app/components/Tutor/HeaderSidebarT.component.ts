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

  SelClase(valor:string): void{
    localStorage.setItem("clase",valor);
  }
  
  CerrarSesion(){
    localStorage.removeItem('token');
    location.reload()
  }

  email      : string = '';
  idUsuario  : number = 0;
  idProfesor : number = 0;
  idTutor    : number = 0;
ngOnInit(): void {
  // traemos los identificadores del usuario en funcion del token 
  this.email       = this.jwtService.getEmail()!;
  this.idUsuario   =  parseInt(this.jwtService.getIdUsuario()!);
  this.idProfesor  = parseInt(this.jwtService.getIdProfesor()!);
  this.idTutor     =    parseInt(this.jwtService.getIdTutor()!);

  console.log(this.email)
  console.log(this.idProfesor)
  console.log(this.idTutor)
  console.log(this.idUsuario)
}

nav_config(){
  this.router.navigate([`/tutor/${this.idUsuario}/config`]);
}
nav_inicio(){
  this.router.navigate([`/tutor/${this.idUsuario}/inicio`]);
}
nav_ver_clases(){
  this.router.navigate([`/tutor/${this.idUsuario}/ver-clases`]);
  location.reload()
}
nav_ver_grupos(){
  this.router.navigate([`/tutor/${this.idUsuario}/ver-grupos`]);
}
tutorados(){
  this.router.navigate([`/tutor/${this.idUsuario}/tutorados`]);
}


}