import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { MatDialog } from "@angular/material/dialog";
import { AprobarPComponent } from "app/components/Profesor/Aprobar/Aprobar.component";
import { DenunciasPComponent } from "app/components/Profesor/Denuncias/DenunciasP.component";
import { ToastrService } from "ngx-toastr";

@Component({
    selector: 'app-ObjetosPrevisualizarMiClase',
    templateUrl: './ObjetosPrevisualizarMiClase.component.html',
    styleUrls: ['./PrevisualizarClase.component.scss', '../FondoT.component.scss','../Denuncias/Denuncias.component.scss']
  })
  export class  ObjetosPrevisualizarMiClaseComponent{
    form!: FormGroup;
    constructor(private http: HttpClient, private toastr: ToastrService, public dialog: MatDialog) {
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