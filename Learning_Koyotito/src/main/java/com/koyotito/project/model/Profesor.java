package com.koyotito.project.model;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class Profesor {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idProfesor;
	private String correoContacto;
	private Integer numFaltasTotales; 
	private String institucion;
	
	public Profesor() {
		 
	}
	public Profesor(Long idProfesor, String correoContacto, Integer numFaltasTotales, String institucion) {
		super();
		this.idProfesor = idProfesor;
		this.correoContacto = correoContacto;
		this.numFaltasTotales = numFaltasTotales;
		this.institucion = institucion;
	}

	@Override
	public String toString() {
		return "Profesor [idProfesor=" + idProfesor + ", correoContacto=" + correoContacto + ", numFaltasTotales="
				+ numFaltasTotales + ", institucion=" + institucion + "]";
	}



	public String getInstitucion() {
		return institucion;
	}

	public void setInstitucion(String institucion) {
		this.institucion = institucion;
	}

	public Long getIdProfesor() {
		return idProfesor;
	}

	public void setIdProfesor(Long idProfesor) {
		this.idProfesor = idProfesor;
	}

	public String getCorreoContacto() {
		return correoContacto;
	}

	public void setCorreoContacto(String correoContacto) {
		this.correoContacto = correoContacto;
	}

	public Integer getNumFaltasTotales() {
		return numFaltasTotales;
	}

	public void setNumFaltasTotales(Integer numFaltasTotales) {
		this.numFaltasTotales = numFaltasTotales;
	}
}
