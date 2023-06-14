import { Profesor } from "./profesor";

export interface Clase {
    idClase:number;
	nombreClase:string;
	fecha:string;
	estado:string; // finalizado o en proceso
	numMeGusta:number;
	numTarjetas:number;
	numVisitas:number;
	numDenuncias: number;
	isPapelera: boolean;
	idioma:string;
	profesor:Profesor;
	asignatura: string;
}
