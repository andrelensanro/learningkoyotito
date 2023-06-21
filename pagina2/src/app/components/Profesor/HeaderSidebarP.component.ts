import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { JwtService } from 'app/jwt.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-HeaderSidebarP',
  templateUrl: './HeaderSidebarP.component.html',
  styleUrls: ['./HeaderSidebarP.component.scss']
})
export class  HeaderSidebarPComponent implements OnInit{
  menuType: String = "General";
  constructor(
    private jwtService:JwtService,
    private toastr: ToastrService,
    private router:Router
  ) {}
  
  CerrarSesion(){
    localStorage.removeItem('token');
  }
  redirect(){
    location.reload()
  }

  email      : string = '';
  idUsuario  : number = 0;
  idProfesor : number = 0;
  idTutor    : number = 0;

  ngOnInit(): void {

    this.email       = this.jwtService.getEmail()!;
    this.idUsuario   =  parseInt(this.jwtService.getIdUsuario()!);
    this.idProfesor  = parseInt(this.jwtService.getIdProfesor()!);
    this.idTutor     =    parseInt(this.jwtService.getIdTutor()!);

  }
  nav_config(){
    this.router.navigate([`/profesor/${this.idUsuario}/config`]);
  }

}