package com.koyotito.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.koyotito.project.model.Clase;
import com.koyotito.project.model.RelGrupoClase;

@Repository
public interface RelGrupoClaseRepo extends JpaRepository<RelGrupoClase, Long> {
	
	List<RelGrupoClase> findByClaseIdClase(Long idClase);
	
	
	@Query(value="SELECT clase_idClase from relgrupoclase where grupo_idGrupo=:idGrupo", nativeQuery = true)
	List<Long> findAllClaseByGrupoIdGrupo(Long idGrupo);
}
