package com.koyotito.project.services;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.koyotito.project.model.Clase;
import com.koyotito.project.model.RelGrupoClase;
import com.koyotito.project.repository.RelGrupoClaseRepo;

@Service
public class RelGrupoClaseService {

	@Autowired
	private RelGrupoClaseRepo relgrupoclaseRepo;
	@Autowired
	private ClaseService claseService;
	
	public RelGrupoClase save(RelGrupoClase rel) {
		return relgrupoclaseRepo.save(rel);
	}
	
	public void delete(RelGrupoClase rel) {
		relgrupoclaseRepo.delete(rel);
	}
	
	public void deleteById(Long idRelacion) {
		relgrupoclaseRepo.deleteById(idRelacion);
	}
	
	public List<RelGrupoClase> findByClaseIdClase(Long idClase){
		return relgrupoclaseRepo.findByClaseIdClase(idClase);
	}
	
	public List<Clase> findAllClaseByGrupoIdGrupo(Long idGrupo){
		List<Clase> clases = new ArrayList<Clase>();
		List<Long> ids_clases = new ArrayList<Long>();
		ids_clases = relgrupoclaseRepo.findAllClaseByGrupoIdGrupo(idGrupo);
		for(Long idClase : ids_clases) {
			clases.add(claseService.findById(idClase));
		}
		return clases;
	}
}
