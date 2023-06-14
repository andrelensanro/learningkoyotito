import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JwtService } from 'app/jwt.service';

import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-PantallaFin',
  templateUrl: './PantallaFin.component.html',
  styleUrls: ['./PantallaFin.component.scss']
})


export class PantallaFinComponent implements OnInit{
  xpFin="";
  email      : string = '';
  idUsuario  : number = 0;
  idProfesor : number = 0;
  idTutor    : number = 0;
  constructor(
    private router : Router,
    private jwtService:JwtService,
    private toastr: ToastrService,
  ){}
  ngOnInit(): void {
    this.email       = this.jwtService.getEmail()!;
    this.idUsuario   =  parseInt(this.jwtService.getIdUsuario()!);
    this.idProfesor  = parseInt(this.jwtService.getIdProfesor()!);
    this.idTutor     =    parseInt(this.jwtService.getIdTutor()!);
  }
   result=false;
  cargar(){
    this.result=true;
    console.log(localStorage.getItem("xp"));
    return localStorage.getItem("xp");
  }
  nav_inicio(){
    this.router.navigate([`profesor/${this.idUsuario}/inicio`]);
  }
}