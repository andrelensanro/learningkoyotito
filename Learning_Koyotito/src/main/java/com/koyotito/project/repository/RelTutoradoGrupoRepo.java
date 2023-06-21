package com.koyotito.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.koyotito.project.model.RelTutoradoGrupo;

@Repository
public interface RelTutoradoGrupoRepo extends JpaRepository<RelTutoradoGrupo, Long> {
	
	List<RelTutoradoGrupo> findByTutoradoIdTutorado(Long idTutorado);
	
	@Query(value="SELECT count(*) "
			+ "FROM reltutoradogrupo "
			+ "WHERE grupo_idgrupo=:idgrupo", nativeQuery = true)
	int numTutoradosGrupo(Long idgrupo);
	
}
