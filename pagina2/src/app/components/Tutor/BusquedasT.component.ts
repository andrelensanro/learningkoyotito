
import { Component, OnInit } from "@angular/core";
import { Clase } from "app/models/clase";
import { Usuario } from "app/models/usuario";
import { ClaseService } from "app/services/clase.service";
import { ProfeService } from "app/services/profe.service";
import { UsuarioService } from "app/services/usuario.service";

@Component({
    selector: 'app-BusquedasT',
    templateUrl: './BusquedasT.component.html',
    styleUrls: ['./FondoT.component.scss', './InicioT.component.scss']
  })




  export class  BusquedasTComponent implements OnInit{
  

    un_usuario:Usuario = {
      idUsuario: 0,
      nombre: '',
      apellido1: '',
      apellido2: '',
      correo: '',
      password: '',
      num_denuncias: 0,
      idTipoUsuario: 0,
      admin_id:0,
      prof_id:0,
      tutor_id:0,
      instPseudonimo: '',
    };

    
    clases : Clase[] = []
    usuarios: Usuario[] = []
    nombreCompleto: string = ''
    constructor(
      private claseService: ClaseService,
      private usuarioService: UsuarioService,
      private profeService: ProfeService,

    ){}


    i: number = 0
    ngOnInit(): void { 
      
    
      this.claseService.findAll()
      .subscribe( ( clases : Clase[] ) => {
        this.clases = clases
      
        for( this.i=0; this.i<clases.length; this.i++ ){
          console.log( "nombre de la clase " + this.clases[this.i].nombreClase )
          console.log( "id del profesor de la clase " + clases[this.i].profesor.idProfesor  )
          console.log( typeof this.clases[this.i].nombreClase )
          // this.generarListaProfesores( clases[this.i].profesor.idProfesor  );
        }
        
        console.log("numero de usuarios" + this.usuarios.length)
       
      });

      
      
    }

    //// REVISAR CUANDO ESTE GENERANDO LOS DATOS DE LAS CLASES
    // generarListaProfesores(idProfesor:number){
    //   this.profeService.getUsuarioByIdProfesor( idProfesor )
    //   .subscribe( ( usuario: Usuario ) => {
    //     this.usuarios.push(usuario);
    //     console.log("numero de usuarios" + this.usuarios.length)
    //     this.usuarios.forEach(element => {
    //       console.log(element)
    //     });
    //   })
    // }

      


      // this.profeService.getUsuarioByIdProfesor( )
      // .subscribe( ( usuario: Usuario ) => {
        
        //this.un_usuario = usuario
//
        //this.usuarios.push(this.un_usuario)
//
        //this.usuarios[i].nombre = usuario.nombre;
        //this.usuarios[i].apellido1 = usuario.apellido1;
        //this.usuarios[i].apellido2 = usuario.apellido2;

    //     console.log("el valor de i es " + this.i)
    //     //console.log("00000000 nombre del profesor " + usuario.nombre)
    //     console.log("00000000 nombre del profesor " + usuario)

    //   });
    // }





  }