package com.koyotito.project.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.koyotito.project.model.Archivo;
import com.koyotito.project.services.ArchivoService;


@RestController
@RequestMapping("/archivo")
@CrossOrigin(origins = "http://localhost:4200")
public class ArchivoController {
	@Autowired
	private ArchivoService archivoService;
	
	
	@PostMapping("/crear")
	public Archivo save(@RequestBody Archivo archivo) {
		return archivoService.save(archivo);
	}
	
	
	@PutMapping("/{id}")
	public Archivo update(@PathVariable("id") Long id, @RequestBody Archivo archivo1) {
		Archivo archivo = new Archivo();
		archivo = archivoService.findById(id);
		
		if(archivo != null) {
			archivo.setPapelera(archivo1.getPapelera());			
			archivo.setNombre(archivo1.getNombre());			
		}
		
		return archivoService.save(archivo);
	}
	
	@DeleteMapping("/{id}")
	public void delete(@PathVariable("id") Long id) {
		Archivo archivo = new Archivo();
		archivo = archivoService.findById(id);
		if(archivo != null)
			archivoService.delete(archivo);
		
	}
	
	
}
