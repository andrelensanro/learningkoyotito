import { CArtesComponent } from './components/alumno/VerClase/CArtes.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenuComponent } from './components/menu/menu.component';
import { RegistroComponent } from './components/registro/registro.component';
import { HomeComponent } from './components/home';
import { RecuperarContraComponent } from './components/sesion/RecuperarContra.component';
import { ReestContraComponent } from './components/sesion/ReestContra.component';
import { CrearClaseComponent } from './components/Profesor/Clase/ClasesProfesor/CrearClase.component';
import { InicioAlumnoComponent } from './components/alumno/InicioAlumno.component';
import { ConfigPComponent } from './components/Profesor/Datos/ConfigP.component';
import { ConfigTComponent } from './components/Tutor/Config/ConfigT.component';
import { InicioTComponent } from './components/Tutor/InicioT.component';
import { BusquedasTComponent } from './components/Tutor/BusquedasT.component';
import { GruposComponent } from './components/Profesor/Grupos/grupos.component';
import { GrupoEspComponent } from './components/Profesor/Grupos/grupoEsp.component';
import { GruposTComponent } from './components/Tutor/Grupos/gruposT.component';
import { InicioProfComponent } from './components/Profesor/Inicio/InicioProf.component';
import { MeGustaPComponent } from './components/Profesor/ClasesMeGusta/MeGustaP.component';
import { HistorialPComponent } from './components/Profesor/HistorialP/HistorialP.component';
import { PrevisualizarClaseComponent } from './components/Profesor/Visualizar_Clase/PrevisualizarClase.component';
import { VerClaseComponent } from './components/Profesor/Clase/VerClase/VerClase.component';
import { MisClasesComponent } from './components/Profesor/MisClases/MisClases.component';
import { ClasesComponent } from './components/Tutor/Clases/Clases.component';
import { DenunciasPComponent } from './components/Profesor/Denuncias/DenunciasP.component';
import { DenunciasPagComponent } from './components/Profesor/Denuncias/DenunciasPag.component';
import { EditarClaseComponent } from './components/Profesor/Clase/EditarMiClase/EditarClase.component';
import { PrevisualizarMiClaseComponent } from './components/Profesor/MisClases/PrevisualizarMiClase.component';
import { PrevisualizarClaseTComponent } from './components/Tutor/Visualizar_Clase/PrevisualizarClase.component';
import { GruposAComponent } from './components/alumno/Grupos/grupos.component';
import { ClasesAComponent } from './components/alumno/Clases/Clases.component';
import { VerClaseAComponent } from './components/alumno/VerClase/VerClase.component';
import { MediaComponent } from './media/media.component';
import { AuthGuard } from './helpers/auth.guard';
import { MatesPrevisualizarClaseComponent } from './components/Profesor/Visualizar_Clase/MatesPrevisualizar.component';
import { ArtesPrevisualizarClaseComponent } from './components/Profesor/Visualizar_Clase/ArtesPrevisualizar.component';
import { ObjetosPrevisualizarClaseComponent } from './components/Profesor/Visualizar_Clase/ObjetosPrevisualizar.component';
import { InglesPrevisualizarClaseComponent } from './components/Profesor/Visualizar_Clase/InglesPrevisualizar.component';
import { CienciasPrevisualizarClaseComponent } from './components/Profesor/Visualizar_Clase/CienciasPrevisualizar.component';
import { LogicaPrevisualizarClaseComponent } from './components/Profesor/Visualizar_Clase/LogicaPrevisualizar.component';
import { PCArtesComponent } from './components/Profesor/Clase/VerClase/PCArtes.component';
import { PCObjetosComponent } from './components/Profesor/Clase/VerClase/PCObjetos.component';
import { PCInglesComponent } from './components/Profesor/Clase/VerClase/PCIngles.component';
import { PCCienciasComponent } from './components/Profesor/Clase/VerClase/PCCiencias.component';
import { PCLogicaComponent } from './components/Profesor/Clase/VerClase/PCLogica.component';
import { PCMatematicasComponent } from './components/Profesor/Clase/VerClase/PCMatematicas.component';
import { CienciasPrevisualizarClaseTComponent } from './components/Tutor/Visualizar_Clase/CienciasPrevisualizar.component';
import { InglesPrevisualizarClaseTComponent } from './components/Tutor/Visualizar_Clase/InglesPrevisualizar.component';
import { LogicaPrevisualizarClaseTComponent } from './components/Tutor/Visualizar_Clase/LogicaPrevisualizar.component';
import { MatesPrevisualizarClaseTComponent } from './components/Tutor/Visualizar_Clase/MatesPrevisualizar.component';
import { ObjetosPrevisualizarClaseTComponent } from './components/Tutor/Visualizar_Clase/ObjetosPrevisualizar.component';
import { CObjetosComponent } from './components/alumno/VerClase/CObjetos.component';
import { CMatematicasComponent } from './components/alumno/VerClase/CMatematicas.component';
import { CLogicaComponent } from './components/alumno/VerClase/CLogica.component';
import { CInglesComponent } from './components/alumno/VerClase/CIngles.component';
import { CCienciasComponent } from './components/alumno/VerClase/CCiencias.component';
import { ArtesPrevisualizarClaseTComponent } from './components/Tutor/Visualizar_Clase/ArtesPrevisualizar.component';
import { TutoradosComponent } from './components/Tutor/Tutorados/Tutorados.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent },
  {path: 'recpContra', component: RecuperarContraComponent},
  {path: 'reestablecimiento', component: ReestContraComponent},
  /*    http:localhost/idusuario/clase-crear/idclase     */
  {path: 'alumno/inicio', component: InicioAlumnoComponent, /*canActivate: [AuthGuard] */},
  {path: 'alumno/ver-grupos', component: GruposAComponent, /*canActivate: [AuthGuard]*/}, 
  {path: 'alumno/:idTutorado/ver-clases', component: ClasesAComponent /* canActivate: [AuthGuard] */},
  {path: 'alumno/:idTutorado/reproducir-clase', component: VerClaseAComponent /*canActivate: [AuthGuard]*/ },

  {path: 'alumno/:idTutorado/reproducir-clase/artes', component: CArtesComponent /*canActivate: [AuthGuard]*/ },
  {path: 'alumno/:idTutorado/reproducir-clase/ciencias', component: CCienciasComponent /*canActivate: [AuthGuard]*/ },
  {path: 'alumno/:idTutorado/reproducir-clase/ingles', component:   CInglesComponent /*canActivate: [AuthGuard]*/ },
  {path: 'alumno/:idTutorado/reproducir-clase/logica', component:   CLogicaComponent /*canActivate: [AuthGuard]*/ },
  {path: 'alumno/:idTutorado/reproducir-clase/mates', component:    CMatematicasComponent /*canActivate: [AuthGuard]*/ },
  {path: 'alumno/:idTutorado/reproducir-clase/objetos', component:  CObjetosComponent /*canActivate: [AuthGuard]*/ },

  {path: 'tutor/:idUsuario/config', component: ConfigTComponent, canActivate: [AuthGuard]},
  {path: 'tutor/:idUsuario/inicio', component: InicioTComponent, canActivate: [AuthGuard]},
  {path: 'tutor/:idTutor/ver-grupos', component: GruposTComponent, canActivate: [AuthGuard]},
  {path: 'tutor/:idTutor/ver-clases', component: ClasesComponent, canActivate: [AuthGuard]},
  {path: 'tutor/:idTutor/previa-clase', component: PrevisualizarClaseTComponent, canActivate: [AuthGuard]},
  
  {path: 'tutor/:idTutor/previa-clase/artes', component:  ArtesPrevisualizarClaseTComponent, canActivate: [AuthGuard]},
  {path: 'tutor/:idTutor/previa-clase/ciencias', component: CienciasPrevisualizarClaseTComponent, canActivate: [AuthGuard]},
  {path: 'tutor/:idTutor/previa-clase/ingles', component:   InglesPrevisualizarClaseTComponent, canActivate: [AuthGuard]},
  {path: 'tutor/:idTutor/previa-clase/logica', component: LogicaPrevisualizarClaseTComponent, canActivate: [AuthGuard]},
  {path: 'tutor/:idTutor/previa-clase/mates', component: MatesPrevisualizarClaseTComponent, canActivate: [AuthGuard]},
  {path: 'tutor/:idTutor/previa-clase/objetos', component: TutoradosComponent, canActivate: [AuthGuard]},
  
  {path: 'tutor/:idTutor/tutorados', component: ObjetosPrevisualizarClaseTComponent, canActivate: [AuthGuard]},
  
  {path: 'home/busquedas', component: BusquedasTComponent, canActivate: [AuthGuard]}, // BUSQUEDA DE CLASES -- LO OCUPO PARA REDIRIGIR A LA PERSONA CUANDO APLICA UN FLITRO
  /*filtrados por institucion y demas se muestran en esta, probablemnte cambie el path, para estos dos */
  {path: 'home/ver-vista-previa/:idClase', component: PrevisualizarClaseComponent, canActivate: [AuthGuard]},

  {path: 'profesor/:idUsuario/inicio', component: InicioProfComponent, canActivate: [AuthGuard]},
  {path: 'profesor/:idProfesor/crear-clase', component: CrearClaseComponent, canActivate: [AuthGuard]},
  {path: 'profesor/:idUsuario/config', component: ConfigPComponent, canActivate: [AuthGuard]},
  {path: 'profesor/:idProfesor/ver-grupos', component: GruposComponent, canActivate: [AuthGuard]},
  {path: 'profesor/:idProfesor/grupo/:idGrupo', component: GrupoEspComponent, canActivate: [AuthGuard]},
  {path: 'profesor/:idProfesor/ver-clases-gusta', component: MeGustaPComponent, canActivate: [AuthGuard]},
  {path: 'profesor/:idProfesor/ver-historial', component: HistorialPComponent, canActivate: [AuthGuard]},
  {path: 'profesor/:idProfesor/mis-clases', component: MisClasesComponent, canActivate: [AuthGuard]},
  {path: 'profesor/:idProfesor/mi-multimedia', component: MediaComponent, canActivate: [AuthGuard] },
  //{path: 'profesor/:idProfesor/ver-clase/:idClase', component: VerClaseComponent, canActivate: [AuthGuard]},
  {path: 'profesor/:idProfesor/ver-denuncias', component: DenunciasPagComponent, canActivate: [AuthGuard]},
  {path: 'profesor/:idProfesor/editar-clase/:idClase', component: EditarClaseComponent, canActivate: [AuthGuard]},

  {path: 'profesor/:idProfesor/previa-mi-clase/artes', component: ArtesPrevisualizarClaseComponent, canActivate: [AuthGuard] },
  {path: 'profesor/:idProfesor/previa-mi-clase/objetos', component: ObjetosPrevisualizarClaseComponent, canActivate: [AuthGuard] },
  {path: 'profesor/:idProfesor/previa-mi-clase/ingles', component: InglesPrevisualizarClaseComponent, canActivate: [AuthGuard] },
  {path: 'profesor/:idProfesor/previa-mi-clase/ciencias', component: CienciasPrevisualizarClaseComponent, canActivate: [AuthGuard] },
  {path: 'profesor/:idProfesor/previa-mi-clase/logica', component: LogicaPrevisualizarClaseComponent, canActivate: [AuthGuard] },
  {path: 'profesor/:idProfesor/previa-mi-clase/mates', component: MatesPrevisualizarClaseComponent, canActivate: [AuthGuard] },
  
  {path: 'profesor/:idProfesor/ver-clase/artes', component: PCArtesComponent, canActivate: [AuthGuard]},
  {path: 'profesor/:idProfesor/ver-clase/objetos', component: PCObjetosComponent, canActivate: [AuthGuard]},
  {path: 'profesor/:idProfesor/ver-clase/ingles', component: PCInglesComponent, canActivate: [AuthGuard]},
  {path: 'profesor/:idProfesor/ver-clase/ciencias', component: PCCienciasComponent, canActivate: [AuthGuard]},
  {path: 'profesor/:idProfesor/ver-clase/logica', component: PCLogicaComponent, canActivate: [AuthGuard]},
  {path: 'profesor/:idProfesor/ver-clase/mates', component: PCMatematicasComponent, canActivate: [AuthGuard]},


//  {path: '**', redirectTo: 'profesor/inicio'},
  {path: '**', redirectTo: '/home'},
//  {path: '**', redirectTo: 'tutor/inicio'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
