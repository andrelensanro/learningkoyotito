import { Profesor } from "./profesor";

export interface Archivo{
    idArchivo: number;
	enlace: string;
	isPapelera: boolean;
	nombre: string;
	tipo: string;
	profesor: Profesor;
}