import { Clase } from "./clase";

export interface Tarjeta{
    idTarjeta: number;
	instruccion: string;
	clave: string;
	tipoLetra: string;
	tamanio: number;
	clase: Clase;
}
