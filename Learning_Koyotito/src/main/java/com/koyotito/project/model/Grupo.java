package com.koyotito.project.model;


import java.util.Date;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import jakarta.persistence.OneToOne;

@Entity
public class Grupo {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idGrupo;
	private String nombreGrupo;
	private Date fechaCreacion;
	private int numAlumnos;
	
	
	@ManyToOne
	private Profesor profesor;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "invi_id", referencedColumnName = "id_invitacion",  nullable = true)
	private Invitaciones invitacion;
	
	public int getNumAlumnos() {
		return numAlumnos;
	}

	public void setNumAlumnos(int numAlumnos) {
		this.numAlumnos = numAlumnos;
	}

	public Grupo() {
		
	}
	
	public Grupo(Long idGrupo, String nombreGrupo, Date fechaCreacion, Profesor profesor,
			List<DenunciaGrupo> denunciaGrupos, List<RelTutoradoGrupo> relUsuarioGrupos,
			List<RelGrupoClase> relGrupoClases) {
		super();
		this.idGrupo = idGrupo;
		this.nombreGrupo = nombreGrupo;
		this.fechaCreacion = fechaCreacion;
		this.profesor = profesor;
	}
	
	@Override
	public String toString() {
		return "Grupo [idGrupo=" + idGrupo + ", nombreGrupo=" + nombreGrupo + ", fechaCreacion=" + fechaCreacion
				+ ", profesor=" + profesor;
	}
	public Invitaciones getInvitacion() {
		return invitacion;
	}

	public void setInvitacion(Invitaciones invitacion) {
		this.invitacion = invitacion;
	}



	public Long getIdGrupo() {
		return idGrupo;
	}

	public void setIdGrupo(Long idGrupo) {
		this.idGrupo = idGrupo;
	}

	public String getNombreGrupo() {
		return nombreGrupo;
	}

	public void setNombreGrupo(String nombreGrupo) {
		this.nombreGrupo = nombreGrupo;
	}

	public Date getFechaCreacion() {
		return fechaCreacion;
	}

	public void setFechaCreacion(Date fechaCreacion) {
		this.fechaCreacion = fechaCreacion;
	}

	public Profesor getProfesor() {
		return profesor;
	}

	public void setProfesor(Profesor profesor) {
		this.profesor = profesor;
	}

	
}
