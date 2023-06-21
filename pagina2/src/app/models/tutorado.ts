import { Tutor } from "./tutor";

export interface Tutorado{ 
    idTutorado: number;
    nivel: number;
    puntos:number;
    pseudonimo: string;
    tutor: Tutor
}