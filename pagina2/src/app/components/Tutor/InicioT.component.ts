import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { AuthService } from '../services/authService.component';
import { Router } from '@angular/router';
import { CerrarSesionComponent } from '../sesion/CerrarSesioncomponent';
import { MenuComponent } from '../menu/menu.component';
import { Dialog } from '@angular/cdk/dialog';
import { LoginService } from 'app/services/login.service';
import { JwtService } from 'app/jwt.service';
import { UsuarioService } from 'app/services/usuario.service';

@Component({
  selector: 'app-InicioT',
  templateUrl: './InicioT.component.html',
  styleUrls: ['./FondoT.component.scss', './InicioT.component.scss']
})
export class InicioTComponent implements OnInit{
  
  constructor(
    public dialog: MatDialog, 
    private loginService:LoginService, 
    private jwtService:JwtService,
    public router: Router
  ){}
  email      : string = '';
  idUsuario  : number = 0;
  idProfesor : number = 0;
  idTutor    : number = 0;
  ngOnInit(): void {
    // console.log("token desde inicio tutor ", this.loginService.getToken())
    const token = this.loginService.getToken(); /*CRUDO*/
    
    const dtoken = this.jwtService.DecodeToken();
    const email = this.jwtService.getEmail();
    console.log("email ", email)
    console.log("rol ", this.jwtService.getRol())
    this.email       = this.jwtService.getEmail()!;
    this.idUsuario   =  parseInt(this.jwtService.getIdUsuario()!);
    this.idProfesor  = parseInt(this.jwtService.getIdProfesor()!);
    this.idTutor     =    parseInt(this.jwtService.getIdTutor()!);

  }
//constructor(private authService :AuthService){}

  DCerrarSesion(): void{
    const dialogRef = this.dialog.open(CerrarSesionComponent, {
      //  data: {name: this.name},
      });
  }
  
  public greaterThan(num: number) {    return num > 0;  }


  SelClase(valor:string): void{
    if(valor==="matematicas"){
      localStorage.setItem("clase","Matemáticas");
    }else if(valor==="espanol"){
      localStorage.setItem("clase","Español");
    }else if(valor==="artes"){
      localStorage.setItem("clase","Artes");
    }else if(valor==="ciencias"){
      localStorage.setItem("clase","Conocimientos Naturales");
    }else if(valor==="logica"){
      localStorage.setItem("clase","Razonamiento lógico");
    }else if(valor==="ingles"){
      localStorage.setItem("clase","Inglés");
    }else{
      localStorage.setItem("clase",valor);
    }
  }

  recomendados(){
      this.router.navigate([`tutor/${this.idTutor}/ver-clases`]);
  }
} 