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
public class Tutor {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(unique = true, nullable = false)
	private Long idTutor; 
	private Integer numTutorados;
	public Tutor() {
		this.numTutorados=0;
	}
	
	public Tutor(Long idTutor, Integer numTutorados) {
		this.idTutor = idTutor;
		this.numTutorados = numTutorados;
	}

	@Override
	public String toString() {
		return "Tutor [idTutor=" + idTutor + ", numTutorados=" + numTutorados;
	}

	public Long getIdTutor() {
		return idTutor;
	}
	public void setIdTutor(Long idTutor) {
		this.idTutor = idTutor;
	}
	public Integer getNumTutorados() {
		return numTutorados;
	}
	public void setNumTutorados(Integer numTutorados) {
		this.numTutorados = numTutorados;
	}
}
	