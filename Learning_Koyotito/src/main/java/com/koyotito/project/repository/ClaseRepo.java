package com.koyotito.project.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.koyotito.project.model.Clase;

@Repository
public interface ClaseRepo extends JpaRepository<Clase, Long>{
	
	@Query(value="select nombreClase id from clase", nativeQuery=true)
    List<String> todasClases();
	
	@Query(value="SELECT DISTINCT nombreClase FROM clase JOIN usuario "
			+ "ON clase.profesor_idProfesor = usuario.prof_id "
			+ "AND usuario.nombre= UPPER(:nombre) or usuario.apellido1 = UPPER(:apellido1) or usuario.apellido2 = UPPER(:apellido2) ", nativeQuery=true)
	
	List<String> todasClase_profesor(@Param("nombre") String nombre, @Param("apellido1") String apellido1,  @Param("apellido2") String apellido2);
	
	@Query(value="SELECT DISTINCT ombreClase FROM clase JOIN profesor "
			+ "ON clase.profesor_idProfesor = profesor.idProfesor "
			+ "WHERE profesor.institucion=:institucion", nativeQuery=true)
	List<String> todasClase_institucion(@Param("institucion") String institucion);
	
	
	List<Clase> findByProfesorIdProfesor(Long id);
	
	Optional<Clase> findByNombreClase(String nombre);
	
	@Query(value="select count(*) from visitas where clase_idClase=:idClase", nativeQuery = true)
	Long getNumVisitas(Long idClase);
	
	
	
}
