import { Archivo } from "./archivo";
import { Clase } from "./clase";
import { Tarjeta } from "./tarjeta";

export interface RelTarjetaArchivo{
    clase: Clase,
    tarjeta: Tarjeta,
    archivo:Archivo,
	idRelacion: number,
}
