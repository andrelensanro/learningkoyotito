package com.koyotito.project.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.koyotito.project.model.Clase;
//import com.koyotito.project.model.Clase;
import com.koyotito.project.model.Usuario;
//import com.koyotito.project.repository.UsuarioRepo;
import com.koyotito.project.services.ClaseService;
import com.koyotito.project.services.UsuarioService;

import ch.qos.logback.classic.Logger;
import jakarta.servlet.http.HttpSession;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:4200")
public class HomeController {
	
	private final Logger logger = (Logger) LoggerFactory.getLogger(HomeController.class);
	
	@Autowired
	private ClaseService claseService;
	@Autowired
	private UsuarioService usuarioService;
	
	@PostMapping("reestablecer")
	public void updatePass(@RequestBody Usuario usuario) {
		usuarioService.save(usuario);
	}
	
	
	@GetMapping("filtrar/tagClase/{tag}")
	public List<String> filtrarTag(@PathVariable String nombreClase) {
		return null;
	}
	
	
	@GetMapping("filtrar/tituloclase/{nombreClase}") 
	public List<Clase> filtrarNombreClase(@PathVariable String nombreClase) {
		
		List<String> nombres  = new ArrayList<>();
		nombres = claseService.findAll_nombreClase().stream().filter(p -> p.toLowerCase().contains(nombreClase)).collect(Collectors.toList());
		List<Clase> clases = new ArrayList<Clase>();
		for(String s : nombres){
			Clase c = new Clase();
			c = claseService.findByNombreClase(s);
			clases.add(c);
		}
		return clases;
	}
	
	@GetMapping("filtrar/autor/{nombreAutor}")
	public List<Clase> filtrarNombreAutor(@PathVariable String nombreAutor){ //
		List<String> nombres  = new ArrayList<>();
		nombres = claseService.findAll_profesor(nombreAutor);
		List<Clase> clases = new ArrayList<Clase>();
		for(String s : nombres){
			Clase c = new Clase();
			c = claseService.findByNombreClase(s);
			clases.add(c);
		}
		return clases;
	}
	
	@GetMapping("filtrar/institucion/{institucion}")
	public List<Clase> filtrarInstitucion(@PathVariable String institucion){
		
		List<String> nombres  = new ArrayList<>();
		nombres = claseService.findAll_institucion(institucion);
		List<Clase> clases = new ArrayList<Clase>();
		for(String s : nombres){
			Clase c = new Clase();
			c = claseService.findByNombreClase(s);
			clases.add(c);
		}
		return clases;
	}
	
	
}
