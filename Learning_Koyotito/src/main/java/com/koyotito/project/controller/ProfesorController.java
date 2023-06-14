package com.koyotito.project.controller;

import java.util.Optional;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.koyotito.project.model.Profesor;
import com.koyotito.project.model.Usuario;
import com.koyotito.project.services.ProfesorService;
import com.koyotito.project.services.UsuarioService;

import ch.qos.logback.classic.Logger;


@RestController
@RequestMapping("/profesor")
@CrossOrigin(origins = "http://localhost:4200")
public class ProfesorController {
 
	@Autowired
	private UsuarioService usuarioService;
	@Autowired
	private ProfesorService profesorService;
	
	private final Logger logger = (Logger) LoggerFactory.getLogger(ProfesorController.class);
	
	@PutMapping("/configuracion/{idUsuario}")
	public Usuario cambiarDatos(@PathVariable("idUsuario") Long idUsuario, @RequestBody Usuario usuario){
		Usuario user = usuarioService.findById(idUsuario);
		return user;
	}
	
	@PostMapping("/configuracion")
	public Usuario cambiarDatos(
			@RequestBody String new_password){
		
		Long idUsuario = 2L;
		
		Usuario usr = usuarioService.findById(idUsuario);
		if(usr != null) {
			usr.setPassword(new_password);
			usuarioService.save(usr);
		}
		return usr;
	}
	@GetMapping("/consultar/profesor/{idUsuario}") 
	public Profesor consulta(@PathVariable("idUsuario")Long idUsuario) {
		Long idProfesor = usuarioService.findById_IdProfesor(idUsuario);
		return profesorService.findById(idProfesor);
	}

	@PostMapping("/consultar")
	public Profesor getProfesorByEmail(@RequestBody String email) {
		Usuario usr = usuarioService.findByCorreo(email);
		logger.info("El id del profesor en funcion del usuario "+ usr.getProfesor().getIdProfesor());
		if(usr!=null) {
			Profesor profe = profesorService.findById(usr.getProfesor().getIdProfesor());
			logger.info("la institucion del profesor " + profe.getInstitucion());
			logger.info("el id del profesor desde profesor es  " + profe.getIdProfesor());
			return profe;
		}
		return null;
	}
	@PutMapping("/{idProfesor}/actualizar-correo")
	public Profesor actualizarCorreo(@PathVariable("idProfesor") Long idProfesor, @RequestBody Profesor profesor) {
		logger.info("el id del profesor es " + idProfesor);
		Profesor profe = new Profesor();
		profe = profesorService.findById(idProfesor);
		if(profesorService!=null) {
			profe.setCorreoContacto(profesor.getCorreoContacto());
			profesorService.save(profe);
		}
		return profe;
	}
	
	@GetMapping("/{idProfesor}/consultar")
	public Profesor consultarProfesor_IdProfesor(@PathVariable("idProfesor") Long idProfesor) {
		return profesorService.findById(idProfesor);
	}
//	@GetMapping("/{idUsuario}/consultar")
//	public Profesor consultarProfesor_IdUsuario(@PathVariable("idUsuario") Long idUsuario) {
//		return profesorService.findById(idUsuario);
//	}
	
	
}

