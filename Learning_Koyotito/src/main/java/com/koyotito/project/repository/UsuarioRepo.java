package com.koyotito.project.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.koyotito.project.model.Profesor;
import com.koyotito.project.model.Usuario;

@Repository
public interface UsuarioRepo extends JpaRepository<Usuario, Long>{
	
	//@Query(value = "SELECT * from usuario where usuario.correo=:correo", nativeQuery = true)
	public Optional<Usuario> findByCorreo(String correo);

	@Query(value = "SELECT prof_id FROM usuario WHERE usuario.idUsuario=:idUsuario", nativeQuery=true)
	public Long findById_IdProfesor(Long idUsuario);
	
	
	@Query(value="SELECT * from usuario where usuario.prof_id=:idProfesor", nativeQuery = true)
	public Usuario obtenerUsuarioByIdProfesor (Long idProfesor);
}
