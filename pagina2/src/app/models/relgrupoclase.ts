import { Clase } from "./clase";
import { Grupo } from "./grupo";

export interface relgrupoclase{
    idRelacion: number;
	grupo: Grupo;
	clase: Clase;
}