import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { ToastrService } from "ngx-toastr";
import { DenunciasPComponent } from "../Denuncias/DenunciasP.component";
import { AprobarPComponent } from "../Aprobar/Aprobar.component";
import { JwtService } from "app/jwt.service";

@Component({
    selector: 'app-ObjetosPrevisualizar',
    templateUrl: './ObjetosPrevisualizar.component.html',
    styleUrls: ['./PrevisualizarClase.component.scss', '../FondoP.component.scss','../Denuncias/Denuncias.component.scss']
  })
  export class  ObjetosPrevisualizarClaseComponent implements OnInit{

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


    form!: FormGroup;
    constructor(private jwtService:JwtService,private http: HttpClient, private toastr: ToastrService, public dialog: MatDialog) {
        this.form = new FormBuilder().group({
            chips: [['chip'], []]
        });
    }
    disabled = true;
    items = ['Javascript', 'Typescript'];

    DenunciaDialog(): void{
      const dialogRef = this.dialog.open(DenunciasPComponent, {
        //  data: {name: this.name},
        });
    }


    AprobarDialog(): void{
      const dialogRef = this.dialog.open(AprobarPComponent, {
        //  data: {name: this.name},
        });
    }
    MeGusta(){
      this.toastr.success('Guardado en Me gusta.', 'Éxito',{timeOut: 7000});
    }
    toppings = new FormControl('');

    toppingList: string[] = ['Contenido inapropiado', 'Texto erróneo', 'Contenido ofensivo', 'Imagen errónea', 'No se distingue la imagen'];
  }