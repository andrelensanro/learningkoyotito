package com.koyotito.project.model;
import java.util.Date;
import java.util.List;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;

@Entity
public class Clase {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long idClase;
	private String nombreClase;
	private Date fecha;
	private String estado; // finalizado o en proceso
	private Long numMeGusta;
	private Integer numTarjetas;
	private Long numVisitas;
	private Integer numDenuncias;
	private boolean isPapelera;
	private String idioma;
	private String asignatura;
	
	public String getIdioma() {
		return idioma;
	}

	public void setIdioma(String idioma) {
		this.idioma = idioma;
	}
	@ManyToOne
	private Profesor profesor;
	
	public Clase() {
	}
 	
	@Override
	public String toString() {
		return "Clase [idClase=" + idClase + ", nombreClase=" + nombreClase + ", fecha=" + fecha + ", estado=" + estado
				+ ", numMeGusta=" + numMeGusta + ", numTarjetas=" + numTarjetas + ", numVisitas=" + numVisitas
				+ ", numDenuncias=" + numDenuncias + ", isPapelera=" + isPapelera + ", profesor=" + profesor;
	}
	public Clase(Long idClase, String nombreClase, Date fecha, String estado, Long numMeGusta,
			Integer numTarjetas, Long numVisitas, Integer numDenuncias, boolean isPapelera, Profesor profesor,
			List<Visitas> visitas, List<Likes> likes, List<DenunciaClase> denuncias, List<RelClaseTag> relClaseTags,
			List<Tarjeta> tarjetas, List<RelGrupoClase> relGrupoClases, List<RelTarjetaArchivo> relTarjetaArchivos) {
		super();
		this.idClase = idClase;
		this.nombreClase = nombreClase;
		this.fecha = fecha;
		this.estado = estado;
		this.numMeGusta = numMeGusta;
		this.numTarjetas = numTarjetas;
		this.numVisitas = numVisitas;
		this.numDenuncias = numDenuncias;
		this.isPapelera = isPapelera;
		this.profesor = profesor;
	}
	public Long getIdClase() {
		return idClase;
	}
	public void setIdClase(Long idClase) {
		this.idClase = idClase;
	}
	public String getNombreClase() {
		return nombreClase;
	}
	public void setNombreClase(String nombreClase) {
		this.nombreClase = nombreClase;
	}
	public Date getFecha() {
		return fecha;
	}
	public void setFecha(Date fechaE) {
		this.fecha = fechaE;
	}
	public String getEstado() {
		return estado;
	}
	public void setEstado(String estado) {
		this.estado = estado;
	}
	public Long getNumMeGusta() {
		return numMeGusta;
	}
	public void setNumMeGusta(Long numMeGusta) {
		this.numMeGusta = numMeGusta;
	}
	public Integer getNumTarjetas() {
		return numTarjetas;
	}
	public void setNumTarjetas(Integer numTarjetas) {
		this.numTarjetas = numTarjetas;
	}
	public Long getNumVisitas() {
		return numVisitas;
	}
	public void setNumVisitas(Long numVisitas) {
		this.numVisitas = numVisitas;
	}
	public Integer getNumDenuncias() {
		return numDenuncias;
	}
	public void setNumDenuncias(Integer numDenuncias) {
		this.numDenuncias = numDenuncias;
	}
	public boolean getPapelera() {
		return isPapelera;
	}
	public void setPapelera(boolean isPapelera) {
		this.isPapelera = isPapelera;
	}
	public Profesor getProfesor() {
		return profesor;
	}
	public void setProfesor(Profesor profesor) {
		this.profesor = profesor;
	}
}
