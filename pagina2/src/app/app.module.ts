import { Profesor } from './models/profesor';
import { AuthInterceptor } from './helpers/auth.interceptor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'
import {CommonModule} from '@angular/common';
import { CookieService} from 'ngx-cookie-service'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './components/menu/menu.component';
import { MatToolbarModule } from "@angular/material/toolbar";
import { HomeComponent } from './components/home';
import { MatButtonModule } from "@angular/material/button";
import { RegistroComponent } from './components/registro/registro.component';
import { MatInputModule } from "@angular/material/input";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatDialogModule} from '@angular/material/dialog';
import {  MatCardModule } from "@angular/material/card";
import { inicioSesionComponent } from './components/menu/inicioSesion.component';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { RecuperarContraComponent } from './components/sesion/RecuperarContra.component';
import {ToastrModule} from 'ngx-toastr';
import { ReestContraComponent } from './components/sesion/ReestContra.component';
import { navBar1Component } from './components/Profesor/navBar1.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CrearClaseComponent } from './components/Profesor/Clase/ClasesProfesor/CrearClase.component';
import { CrearClaseV1Component } from './components/Profesor/Clase/ClasesProfesor/CrearClaseV1.component';
import { RouterModule } from '@angular/router';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS, MatFormFieldModule } from '@angular/material/form-field';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatListModule } from '@angular/material/list';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {MatSelectModule} from '@angular/material/select';
import { register } from 'swiper/element/bundle';
import { CerrarSesionComponent } from './components/sesion/CerrarSesioncomponent';
import { ConfigPComponent } from './components/Profesor/Datos/ConfigP.component';
import { HeaderSidebarPComponent } from './components/Profesor/HeaderSidebarP.component';
import { HeaderSidebarTComponent } from './components/Tutor/HeaderSidebarT.component';
import { ConfigTComponent } from './components/Tutor/Config/ConfigT.component';
import { InicioTComponent } from './components/Tutor/InicioT.component';
import { BarraBusquedasComponent } from './components/Profesor/BarraBusquedas.component';
import { BusquedasTComponent } from './components/Tutor/BusquedasT.component';
import { FooterComponent } from './components/Tutor/Footer.component';
import { HeaderSidebarAComponent } from './components/alumno/HeaderSidebarA.component';
import { InicioAlumnoComponent } from './components/alumno/InicioAlumno.component';
import { GruposComponent } from './components/Profesor/Grupos/grupos.component';
import { GrupoEspComponent } from './components/Profesor/Grupos/grupoEsp.component';
import { FooterCrearComponent } from './components/Profesor/FooterCrear.component';
import { InvitacionComponent } from './components/Profesor/Grupos/Invitacion.component';
import { GruposTComponent } from './components/Tutor/Grupos/gruposT.component';
//import { SwiperModule } from 'swiper/angular';
import {MatBadgeModule} from '@angular/material/badge';
import { DenunciasPComponent } from './components/Profesor/Denuncias/DenunciasP.component';
import { InicioProfComponent } from './components/Profesor/Inicio/InicioProf.component';
import { MeGustaPComponent } from './components/Profesor/ClasesMeGusta/MeGustaP.component';
import { HistorialPComponent } from './components/Profesor/HistorialP/HistorialP.component';
import { CrearGrupoComponent } from './components/Profesor/Grupos/CrearGrupo.component';
import { TagInputModule } from 'ngx-chips';
import { RepCrearClaseComponent } from './components/Profesor/Clase/ClasesProfesor/RepCrearClase.component';

import { PrevisualizarClaseComponent } from './components/Profesor/Visualizar_Clase/PrevisualizarClase.component';

import { ArtesPrevisualizarClaseComponent    } from './components/Profesor/Visualizar_Clase/ArtesPrevisualizar.component';
import { CienciasPrevisualizarClaseComponent } from './components/Profesor/Visualizar_Clase/CienciasPrevisualizar.component';
import { InglesPrevisualizarClaseComponent   } from './components/Profesor/Visualizar_Clase/InglesPrevisualizar.component';
import { LogicaPrevisualizarClaseComponent   } from './components/Profesor/Visualizar_Clase/LogicaPrevisualizar.component';
import { MatesPrevisualizarClaseComponent    } from './components/Profesor/Visualizar_Clase/MatesPrevisualizar.component';
import { ObjetosPrevisualizarClaseComponent  } from './components/Profesor/Visualizar_Clase/ObjetosPrevisualizar.component';



import { AprobarPComponent } from './components/Profesor/Aprobar/Aprobar.component';
import { VerClaseComponent } from './components/Profesor/Clase/VerClase/VerClase.component';
import { GuardarClaseComponent } from './components/Profesor/Clase/ClasesProfesor/GuardarClase.component';
import { MisClasesComponent } from './components/Profesor/MisClases/MisClases.component';
import { PantallaFinComponent } from './components/Profesor/Clase/VerClase/PantallaFin.component';
import { ClasesComponent } from './components/Tutor/Clases/Clases.component';

import { PrevisualizarClaseTComponent } from './components/Tutor/Visualizar_Clase/PrevisualizarClase.component';
import { ArtesPrevisualizarClaseTComponent   } from './components/Tutor/Visualizar_Clase/ArtesPrevisualizar.component';
import { ObjetosPrevisualizarClaseTComponent } from './components/Tutor/Visualizar_Clase/ObjetosPrevisualizar.component';
import { MatesPrevisualizarClaseTComponent   } from './components/Tutor/Visualizar_Clase/MatesPrevisualizar.component';
import { CienciasPrevisualizarClaseTComponent} from './components/Tutor/Visualizar_Clase/CienciasPrevisualizar.component';
import { LogicaPrevisualizarClaseTComponent  } from './components/Tutor/Visualizar_Clase/LogicaPrevisualizar.component';
import { InglesPrevisualizarClaseTComponent  } from './components/Tutor/Visualizar_Clase/InglesPrevisualizar.component';

import { DenunciasTComponent } from './components/Tutor/Denuncias/Denuncias.component';
import { AprobarTComponent } from './components/Tutor/Aprobar/Aprobar.component';
import { DenunciasPagComponent } from './components/Profesor/Denuncias/DenunciasPag.component';
import { EditarClaseComponent } from './components/Profesor/Clase/EditarMiClase/EditarClase.component';
import { PrevisualizarMiClaseComponent } from './components/Profesor/MisClases/PrevisualizarMiClase.component';
import { GruposAComponent } from './components/alumno/Grupos/grupos.component';
import { ClasesAComponent } from './components/alumno/Clases/Clases.component';
import { PantallaFinAComponent } from './components/alumno/VerClase/PantallaFin.component';
import { VerClaseAComponent } from './components/alumno/VerClase/VerClase.component';
import { MediaComponent } from './media/media.component';
import { JwtService } from './jwt.service';
import { UsuarioService } from './services/usuario.service';
import { CArtesComponent } from './components/alumno/VerClase/CArtes.component';
import { CCienciasComponent } from './components/alumno/VerClase/CCiencias.component';
import { CObjetosComponent } from './components/alumno/VerClase/CObjetos.component';
import { CMatematicasComponent } from './components/alumno/VerClase/CMatematicas.component';
import { CLogicaComponent } from './components/alumno/VerClase/CLogica.component';
import { CInglesComponent } from './components/alumno/VerClase/CIngles.component';
import { PCArtesComponent } from './components/Profesor/Clase/VerClase/PCArtes.component';
import { PCObjetosComponent } from './components/Profesor/Clase/VerClase/PCObjetos.component';
import { PCInglesComponent } from './components/Profesor/Clase/VerClase/PCIngles.component';
import { PCLogicaComponent } from './components/Profesor/Clase/VerClase/PCLogica.component';
import { PCCienciasComponent } from './components/Profesor/Clase/VerClase/PCCiencias.component';
import { PCMatematicasComponent } from './components/Profesor/Clase/VerClase/PCMatematicas.component';
import { TutoradosComponent } from './components/Tutor/Tutorados/Tutorados.component';

import { TutoradoListaService } from './services/tutorado-lista.service';

import { ManageDataService } from './services/manage-data.service'; // usado en la creacion de la clase

import { ClaseDataService } from './services/clase-data.service';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    RegistroComponent,
    HomeComponent,
    inicioSesionComponent,
    RecuperarContraComponent,
    ReestContraComponent,
    InicioProfComponent,
    navBar1Component,
    CrearClaseComponent,
    CerrarSesionComponent,
    ConfigPComponent,
    HeaderSidebarPComponent,
    ConfigTComponent,
    HeaderSidebarTComponent,
    InicioTComponent,
    BarraBusquedasComponent,
    BusquedasTComponent,
    FooterComponent,
    HeaderSidebarAComponent,
    InicioAlumnoComponent,
    GruposComponent,
    GrupoEspComponent,
    FooterCrearComponent,
    InvitacionComponent,
    GruposTComponent,
    DenunciasPComponent,
    MeGustaPComponent,
    HistorialPComponent,
    CrearGrupoComponent,
    RepCrearClaseComponent,
    PrevisualizarClaseComponent,
    DenunciasPComponent,
    AprobarPComponent,
    VerClaseComponent,
    GuardarClaseComponent,
    MisClasesComponent,
    PantallaFinComponent,
    ClasesComponent,
    PrevisualizarClaseTComponent,
    DenunciasTComponent,
    AprobarTComponent,
    DenunciasPagComponent,
    EditarClaseComponent,
    PrevisualizarMiClaseComponent,
    PrevisualizarClaseTComponent,
    GruposAComponent,
    ClasesAComponent,
    PantallaFinAComponent,
    VerClaseAComponent,
    MediaComponent,
    CArtesComponent,
    CCienciasComponent,
    CInglesComponent,
    CObjetosComponent,
    CMatematicasComponent,
    CLogicaComponent,
    PCArtesComponent,
    PCCienciasComponent,
    PCInglesComponent,
    PCObjetosComponent,
    PCMatematicasComponent,
    PCLogicaComponent,
    ArtesPrevisualizarClaseTComponent ,  
    ObjetosPrevisualizarClaseTComponent ,
    MatesPrevisualizarClaseTComponent   ,
    CienciasPrevisualizarClaseTComponent,
    LogicaPrevisualizarClaseTComponent  ,
    InglesPrevisualizarClaseTComponent  ,
    ArtesPrevisualizarClaseComponent,    
    CienciasPrevisualizarClaseComponent ,
    InglesPrevisualizarClaseComponent   ,
    LogicaPrevisualizarClaseComponent   ,
    MatesPrevisualizarClaseComponent    ,
    ObjetosPrevisualizarClaseComponent  ,
    TutoradosComponent,
    CrearClaseV1Component
      ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatButtonModule,
    FormsModule,
    MatDialogModule,
    MatCardModule,
    MatIconModule,
    MatButtonToggleModule,
    ToastrModule.forRoot({
      timeOut: 1000,
      positionClass: 'toast-bottom-right'
    }),
    RouterModule,
    MatFormFieldModule,
    MatProgressBarModule,
    MatSelectModule,
    MatListModule,
  //  SwiperModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatSidenavModule,
    MatBadgeModule,
    TagInputModule,
  ],
  exports: [
    CrearClaseComponent

  ],
  providers: [ JwtService, UsuarioService,ManageDataService,TutoradoListaService,
    {
      provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
    }
    // CookieService,{provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
