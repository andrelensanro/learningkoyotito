package com.koyotito.project.services;

import java.util.Optional;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.koyotito.project.model.Clase;
import com.koyotito.project.model.Profesor;
import com.koyotito.project.model.Usuario;
import com.koyotito.project.repository.UsuarioRepo;

import ch.qos.logback.classic.Logger;

@Service
public class UsuarioService{
	
	
	
	@Autowired
	private UsuarioRepo usuarioRepo;
	
	private final Logger logger = (Logger)LoggerFactory.getLogger(UsuarioService.class);
	
	public Usuario save(Usuario usuario) {
		return usuarioRepo.save(usuario);
	}
	
	public void delete(Usuario usuario) {
		usuarioRepo.delete(usuario);
	}
	
	public void deleteById(Long id) {
		usuarioRepo.deleteById(id);
	}
	
	public Usuario findByCorreo(String correo) {
		logger.info(correo);
		Optional<Usuario> usr = usuarioRepo.findByCorreo(correo);
		if(usr.isPresent()) {
			logger.info("El id del usuario que obtengo en ursservice " + usr.get().getIdUsuario());
			
			return usr.get();
		}
		return null;
	}
	
	public Usuario findById(Long id) {
		Optional<Usuario> op_usuario = usuarioRepo.findById(id);
		if(op_usuario.isPresent())
			return op_usuario.get();
		else
			return null;
	}
	
	public Long findById_IdProfesor(Long idUsuario) {
		return usuarioRepo.findById_IdProfesor(idUsuario);
	}

	public Usuario findUsuarioByIdProfesor(Long idProfesor) {
		
		Usuario usr = usuarioRepo.obtenerUsuarioByIdProfesor(idProfesor);
		
		return usr;
	}


}
