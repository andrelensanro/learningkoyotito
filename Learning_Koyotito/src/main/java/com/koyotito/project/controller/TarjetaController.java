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

import com.koyotito.project.model.Tarjeta;
import com.koyotito.project.services.TarjetaService;

@RestController
@RequestMapping("/tarjeta")
@CrossOrigin(origins = "http://localhost:4200")
public class TarjetaController {
	@Autowired
	private TarjetaService tarjetaService;
	
	@PostMapping("/crear")
	public Tarjeta save(@RequestBody Tarjeta t) {
		return tarjetaService.save(t);
	}
	
	@PutMapping("/{id}")
	public Tarjeta update(@PathVariable("idTarjeta") Long idTarjeta, @RequestBody Tarjeta tarjeta) {
		Tarjeta t = tarjetaService.findById(idTarjeta);
		if(t!= null){
			t.setInstruccion(tarjeta.getInstruccion());
			t.setClave(tarjeta.getClave());
			return tarjetaService.save(t);
		}
		return null;
	}

	@DeleteMapping("/{id}")
	public void delete(@PathVariable("idTarjeta") Long idTarjeta) {
		
		Tarjeta tarjeta = tarjetaService.findById(idTarjeta);
		if(tarjeta != null)
			tarjetaService.delete(tarjeta);
		
	}

}
