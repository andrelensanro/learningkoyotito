import { JwtService } from 'app/jwt.service';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from "@angular/core";
import { Router } from '@angular/router';


@Component({
  selector: 'app-GuarClase',
  templateUrl: './GuardarClase.component.html',
  styleUrls: ['./GuardarClase.component.scss']
})

export class GuardarClaseComponent implements OnInit {
  
  email      : string = '';
  idUsuario  : number = 0;
  idProfesor : number = 0;
  idTutor    : number = 0;
  idClase    : number = 0;

  constructor(
    private jwtService:JwtService,
    private toastr: ToastrService,
    private router: Router
  ){}
  
  ngOnInit(): void {
    this.email       = this.jwtService.getEmail()!;
    this.idUsuario   =  parseInt(this.jwtService.getIdUsuario()!);
    this.idProfesor  = parseInt(this.jwtService.getIdProfesor()!);
    this.idTutor     =    parseInt(this.jwtService.getIdTutor()!);
    
  }



  nav_vistaprevia(){
    this.router.navigate([`profesor/${this.idProfesor}/previa-mi-clase/${this.idClase}`])
  }

}