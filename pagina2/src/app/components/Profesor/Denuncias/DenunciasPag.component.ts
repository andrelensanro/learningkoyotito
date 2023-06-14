import { Component, Inject, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtService } from 'app/jwt.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-DenunciasPag',
  templateUrl: './DenunciasPag.component.html',
  styleUrls: ['./DenunciasPag.component.scss', '../FondoP.component.scss']
})


export class DenunciasPagComponent implements OnInit{
  
  
  idClase: number = 0;
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




}