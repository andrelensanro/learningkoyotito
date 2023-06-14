import { Invitaciones } from "./invitacion";
import { Profesor } from "./profesor";

export interface Grupo{
    idGrupo: number;
	nombreGrupo: String;
	fechaCreacion: String;
    profesor: Profesor;
    invitacion: Invitaciones;
    numAlumnos: number;
}