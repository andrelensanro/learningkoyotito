package com.koyotito.project.services;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.koyotito.project.model.Grupo;
import com.koyotito.project.repository.GrupoRepo;

@Service
public class GrupoService {
	@Autowired
	private GrupoRepo grupoRepo;
	
	
	public Grupo save(Grupo grupo) {
		return grupoRepo.save(grupo);
	}
	
	public Grupo findById(Long id) {
		 Optional<Grupo> op = grupoRepo.findById(id);
		 if(op!=null)
			 return op.get();
		 return null;
	}
	
	public void deleteById(Long id) {
		grupoRepo.deleteById(id);
	}
	public void delete(Grupo g) {
		grupoRepo.delete(g);
	}
	
	public List<Grupo> findAllByProfesorIdProfesor(Long idProfesor){
		return grupoRepo.findAllByProfesorIdProfesor(idProfesor);
	}
	
	public boolean findByNombreGrupo(String nombre) {/*retorna true cuando el grupo no existe, false cuando si existe */
		Optional<Grupo> grupo = grupoRepo.findByNombreGrupo(nombre);
		if(grupo.get()!= null) {
			return false;
		}
		return true;
	}
	
}
