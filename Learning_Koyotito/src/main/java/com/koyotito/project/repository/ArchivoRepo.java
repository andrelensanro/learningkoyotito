package com.koyotito.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.koyotito.project.model.Archivo;

@Repository
public interface ArchivoRepo extends JpaRepository<Archivo, Long> {
	
	List<Archivo> findByProfesorIdProfesor(Long id);
	
	
}
