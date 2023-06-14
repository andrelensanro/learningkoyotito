package com.koyotito.project.controller;


import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.slf4j.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.koyotito.project.model.AuthenticationReq;
import com.koyotito.project.model.Clase;
import com.koyotito.project.model.Credentials;
import com.koyotito.project.model.Mensaje;
import com.koyotito.project.model.Profesor;
import com.koyotito.project.model.TokenInfo;
import com.koyotito.project.model.Tutor;
import com.koyotito.project.model.Tutorado;
import com.koyotito.project.model.Usuario;
import com.koyotito.project.services.JwtUtilService;
import com.koyotito.project.services.ProfesorService;
import com.koyotito.project.services.TutorService;
import com.koyotito.project.services.TutoradoService;
import com.koyotito.project.services.UsuarioService;

import jakarta.servlet.http.HttpSession;


@RestController
@RequestMapping("/usuario")
@CrossOrigin(origins = "http://localhost:4200")
public class UsuarioController{
	
	private final Logger logger = LoggerFactory.getLogger(UsuarioController.class);
	@Autowired
	ProfesorService profesorService;
	@Autowired
	UsuarioService usuarioService;
	@Autowired
	TutoradoService tutoradoService; 
	@Autowired
	TutorService tutorService;
	@Autowired
	 AuthenticationManager authenticationManager;
	@Autowired
	UserDetailsService usuarioDetailsService;
	@Autowired
	 JwtUtilService jwtUtilService;
	@Autowired
	 PasswordEncoder coder;
	
	@PostMapping("/login")
	public ResponseEntity<TokenInfo> login(@RequestBody AuthenticationReq authenticationReq) {
    
		logger.info("Autenticando al usuario {}", authenticationReq.getusername());

		authenticationManager.authenticate(
			new UsernamePasswordAuthenticationToken(authenticationReq.getusername(),authenticationReq.getclave()));

		final UserDetails userDetails = usuarioDetailsService.loadUserByUsername(
				authenticationReq.getusername());
		final String jwt = jwtUtilService.generateToken(userDetails);

		return ResponseEntity.ok(new TokenInfo(jwt));
	}
	
	@PostMapping("/registro")
	public Mensaje registro(@RequestBody Usuario usuario) {

		Mensaje msg = new Mensaje();
		
		Usuario usr = usuarioService.findByCorreo(usuario.getCorreo());
		if(usr == null) { // crearemos el usuarios
			
			int tipo = usuario.getIdTipoUsuario();
			logger.info("el tipo de usuario es " + tipo);
			if(tipo == 2){ /*PROFESOR*/
				Profesor profesor = new Profesor();
				profesor.setInstitucion(usuario.getInstPseudonimo());
				profesor.setNumFaltasTotales(0);
				
				profesorService.save(profesor);
				usuario.setProfesor(profesor);
			}else if(tipo == 3) { /*TUTOR*/
				
				Tutor tutor = new Tutor();
				tutor.setNumTutorados(1);
				tutorService.save(tutor);
				
				Tutorado tutorado = new Tutorado();
				tutorado.setPseudonimo(usuario.getInstPseudonimo());
				tutorado.setNivel(1);
				tutorado.setPuntos(10L); 
				tutorado.setTutor(tutor);
				//tutorService.save(tutor);
				tutoradoService.save(tutorado);
				usuario.setTutor(tutor);
			}			
			String pass_code = new BCryptPasswordEncoder().encode(usuario.getPassword());
			usuario.setPassword(pass_code);
			usuarioService.save(usuario);
			
			msg.setTipo(1);
			msg.setMsg("Se realizo el registro correctamente");
			return msg;
		}
		msg.setTipo(0);
		msg.setMsg("Ya existe un usuario registrado con el mismo correo");
		return msg;
	}
	
	
	
	
	@GetMapping("/consultar-id/{idUsuario}")
	public Usuario consultarUsuario(@PathVariable("idUsuario") Long idUsuario) {
		return usuarioService.findById(idUsuario);
	}
	
	@PostMapping("/consultar-correo") 
	public Usuario consultarPUsuario(@RequestBody String correo) {
		return usuarioService.findByCorreo(correo);
	}
	
	
	@PutMapping("/{idUsuario}/actualizar-datos")
	public Usuario actualizarDatos(@PathVariable("idUsuario") Long idUsuario, @RequestBody Usuario usuario) {
		Usuario usr = new Usuario();
		usr = usuarioService.findById(idUsuario);
		if(usr!=null) {
			usr.setNombre(usuario.getNombre());
			usr.setApellido1(usuario.getApellido1());
			usr.setApellido2(usuario.getApellido2());
			usuarioService.save(usr);
		}
		return usr;
	}
	
	@PutMapping("/{idUsuario}/actualizar-datos-cuenta")
	public Usuario actualizarDatosCuenta(@PathVariable("idUsuario") Long idUsuario,@RequestBody Credentials creds) {
		Usuario usr = usuarioService.findById(idUsuario);
		if(usr!=null) {
			usr.setCorreo(creds.getcorreo());
			String pass_code = new BCryptPasswordEncoder().encode(creds.getpassword());
			usr.setPassword(pass_code);
			return usuarioService.save(usr);
		}
		return null;
	}
	
	
	@PostMapping("/consultar-tutorado/{pseudonimo}")
	public Tutorado getTutoradoByEmailTutor(@PathVariable("pseudonimo") String pseudonimo, @RequestBody String correoTutor) {
		
		logger.info("tutorado " + pseudonimo);
		logger.info("tutorado " + correoTutor);
		
		Tutorado resp =  tutorService.getTutoradoByEmailTutor(correoTutor, pseudonimo);
		if(resp == null) {
			logger.info("00000000000000000000000000000000000000000000000");
			return null;
		}
		logger.info("9999999999999999999999999999 " + resp.getPseudonimo() + " "+ resp.getIdTutorado());
		return resp;
	}
	
	@DeleteMapping("/deleteUsuario/{idUsuario}")
	public Mensaje deleteUsuario(@PathVariable("idUsuario") Long idUsuario) {
		Mensaje msg = new Mensaje();
		Usuario usuario = new Usuario();
		usuario = usuarioService.findById(idUsuario);
		if(usuario!=null) {
			usuarioService.deleteById(idUsuario);
			msg.setTipo(1);
			msg.setMsg("Se ha eliminado su cuenta");
			return msg;
		}
		msg.setTipo(0);
		msg.setMsg("A ocurrido un problema, en este momento no puede eliminar su cuenta");
		return msg;
	}
	
	

}
