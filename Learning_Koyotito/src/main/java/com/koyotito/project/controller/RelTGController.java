package com.koyotito.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.koyotito.project.services.RelTutoradoGrupoService;

@RestController
@RequestMapping("/")
@CrossOrigin(origins = "http://localhost:4200")
public class RelTGController {
	
	
	@Autowired
	private RelTutoradoGrupoService rgtService;
	
	
	@GetMapping("profesor/detalle-grupo-insc/{idGrupo}")
	public int numTutoradosGrupo(@PathVariable("idGrupo")Long idGrupo){
		return rgtService.numTutoradosGrupo(idGrupo);
	}
	
}
