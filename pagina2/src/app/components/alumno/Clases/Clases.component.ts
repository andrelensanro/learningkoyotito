import { Component, Inject, OnInit } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-ClasesA',
  templateUrl: './Clases.component.html',
  styleUrls: ['../FondoA.component.scss', './Clases.component.scss']
})
export class ClasesAComponent implements OnInit{

  idClase: number = 0
  idTutorado : number = 0

  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,

  ){}
  
  
  ngOnInit(): void {
    
    
    
  }
  
  
  clase(){
    console.log(localStorage.getItem("clase"));
    return localStorage.getItem("clase");
  }

  nav_repClase(){

    this.activatedRoute.paramMap.subscribe(params => {
    this.idClase = parseInt(params.get('idGrupo')!);
    this.idTutorado = parseInt(params.get('idTutorado')!);
    
    
    this.router.navigate([`/alumno/${this.idTutorado}/reproducir-clase/${this.idClase}`]);


    });  

  }

}