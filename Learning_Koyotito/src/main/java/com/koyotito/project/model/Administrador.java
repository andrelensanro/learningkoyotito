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
public class Administrador {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idAdministrador;
	
	public Administrador() {
		
	}

	@Override
	public String toString() {
		return "Administrador [idAdministrador=" + idAdministrador;
	}
	public Long getIdAdministrador() {
		return idAdministrador;
	}

	public void setIdAdministrador(Long idAdministrador) {
		this.idAdministrador = idAdministrador;
	}

	public Administrador(Long idAdministrador, List<ControlUsuario> controlUsuarios, Usuario usuario) {
		super();
		this.idAdministrador = idAdministrador;
	}

	
	
		
}
