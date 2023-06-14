import { Dialog } from '@angular/cdk/dialog';
import { UsuarioService } from 'app/services/usuario.service';
import { Component, Inject, Input, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { Invitaciones } from 'app/models/invitacion';
import { Mensaje } from 'app/models/mensaje';
import { Tutorado } from 'app/models/tutorado';
import { InvitacionService } from 'app/services/invitacion.service';
import { ToastrService } from 'ngx-toastr';
import { TutorService } from 'app/services/tutor.service';
@Component({
  selector: 'app-Invitacion',
  templateUrl: './Invitacion.component.html',
  styleUrls: ['./Invitacion.component.scss']
})
export class InvitacionComponent{ 

  correoTutor : string = '';
  tutorado : string = '';

  tutoradoInfo: Tutorado ={
    idTutorado: 0,
    nivel: 1,
    puntos:10,
    pseudonimo: this.tutorado,
  }


  constructor(
    private toastr: ToastrService,
    private inviService: InvitacionService,
    private tutorService: TutorService,
    //private tutoradoService: TutoradoService,

    @Inject(MAT_DIALOG_DATA) public data: {idGrupo: number}

  ) {}

  Invitacion(){


    console.log(this.correoTutor)
    console.log(this.tutorado)

    

    this.inviService.getInvitacionByIdGrupo(this.data.idGrupo)
    .subscribe( ( invi : Invitaciones ) => {
      // console.log("invitacion recp " + invi)
    
      this.tutorService.findTutoradoByEmailTutor(this.correoTutor, this.tutorado)//obtener tutorado a partir de tutor
      .subscribe(  (tutorado: Tutorado) => {
        // this.tutoradoInfo = tutorado;
        // console.log( "tutorado obj " + tutorado)
        // console.log( "tutorado obj " + this.tutoradoInfo)
        if(tutorado == null){
          this.toastr.error("Asegúrate de que los datos del tutor y tutorado son correctos", 'Error',{timeOut: 5000}); 
        }

        this.inviService.enviarInvitacion(invi.id_invitacion, tutorado)
        .subscribe( ( msg: Mensaje ) => {
          if(msg.tipo == 1)
            this.toastr.success('Invitación enviada', 'Éxito',{timeOut: 5000}); 
          else
            this.toastr.error(msg.mensaje, 'Error',{timeOut: 5000}); 
  
        });
      });
    })





  }






}



