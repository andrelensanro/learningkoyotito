package com.koyotito.project.controller;

import java.time.Instant;
import java.time.LocalDateTime;
import java.time.ZoneId;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import org.slf4j.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.koyotito.project.model.Clase;
import com.koyotito.project.model.Grupo;
import com.koyotito.project.model.Invitaciones;
import com.koyotito.project.model.Mensaje;
import com.koyotito.project.model.RelTutoradoInvitacion;
import com.koyotito.project.model.Tutorado;
import com.koyotito.project.services.ClaseService;
import com.koyotito.project.services.GrupoService;
import com.koyotito.project.services.InvitacionService;
import com.koyotito.project.services.RelGrupoClaseService;
import com.koyotito.project.services.RelTutoradoGrupoService;
import com.koyotito.project.services.RelTutoradoInvitacionService;


@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:4200")
public class GrupoController {
	
	@Autowired
	private GrupoService grupoService;
	@Autowired
	private RelTutoradoGrupoService rtgService;
	@Autowired
	private ClaseService claseService;
	@Autowired
	private InvitacionService inviService;
	@Autowired
	private RelGrupoClaseService rgcService;
	@Autowired
	private RelTutoradoInvitacionService rtiService;
	
	private final Logger logger = (Logger)LoggerFactory.getLogger(GrupoController.class);
	
	@PostMapping("profesor/crear-grupo")
	public Grupo crear(@RequestBody Grupo grupo) {
		Grupo g = grupoService.save(grupo);
		if(g != null) {
			LocalDateTime hoy = LocalDateTime.now();  
	        Instant instant = hoy.atZone(ZoneId.systemDefault()).toInstant();
	        Date date = Date.from(instant);
			g.setFechaCreacion(date);
			int numT = rtgService.numTutoradosGrupo(g.getIdGrupo());
			g.setNumAlumnos(numT);
			Invitaciones inv = g.getInvitacion();
			inv.setUrl_invitacion("http:localhost4200/profesor/grupo/"+g.getIdGrupo());
			inviService.save(inv);
			g.setInvitacion(inv);
			return grupoService.save(g);
		}
		return null;
	}

	
	
	@GetMapping("profesor/{idProfesor}/buscar-grupos")
	public List<Grupo> getGrupos(@PathVariable("idProfesor") Long idProfesor){
		return grupoService.findAllByProfesorIdProfesor(idProfesor);
	}
	
	@GetMapping("grupo/{idGrupo}/buscar-clases")
	public List<Clase> getClasesByIdGrupo(@PathVariable("idGrupo") Long idGrupo){
		logger.info("idgrupo oooooooooooo "+idGrupo);
		List<Clase> clases = rgcService.findAllClaseByGrupoIdGrupo(idGrupo);
		logger.info("tam " + clases.size());
		return clases;
	}
	@GetMapping("grupo/{idGrupo}/gen-invitacion")
	public Invitaciones gen_invitacion(@PathVariable("idGrupo") Long idGrupo){
		Grupo grupo = new Grupo();
		grupo = grupoService.findById(idGrupo);
		if(grupo.getInvitacion()==null)
			return inviService.generarInvitacion(idGrupo);
		return grupo.getInvitacion();
	}
	@PostMapping("grupo/{idInvitacion}/enviar-invitacion")
	public Mensaje enviarInvitacion(@PathVariable("idInvitacion") Long idInvitacion, @RequestBody Tutorado tutorado) {
		Mensaje msg = new Mensaje();
		RelTutoradoInvitacion rel = new RelTutoradoInvitacion();
		// revisar que esa invitacion no haya sido ya enviada
		List<RelTutoradoInvitacion> lista = new ArrayList<>();
		lista = rtiService.findByTutoradoIdTutorado(tutorado.getIdTutorado());
		
		for(RelTutoradoInvitacion r: lista) {
			if(r.getInvitacion().getId_invitacion() == idInvitacion) {
				msg.setMsg("Invitacion enviada y pendiente");
				msg.setTipo(0);
				return msg;
			}
		}
		// enviar invitacion
		Invitaciones invi = new 	Invitaciones();
		invi = inviService.findById(idInvitacion);
		rel.setInvitacion(invi);
		rel.setTutorado(tutorado);
		rtiService.save(rel);
		
		msg.setMsg("Invitacion enviada con éxito");
		msg.setTipo(1);
		return msg;
		
	}
	
	
	

}
