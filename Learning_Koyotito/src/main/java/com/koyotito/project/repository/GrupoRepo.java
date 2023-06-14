package com.koyotito.project.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.koyotito.project.model.Grupo;

public interface GrupoRepo extends JpaRepository<Grupo, Long>{

	List<Grupo> findAllByProfesorIdProfesor(Long idProfesor);
	Optional<Grupo> findByNombreGrupo(String nombreClase);
}
