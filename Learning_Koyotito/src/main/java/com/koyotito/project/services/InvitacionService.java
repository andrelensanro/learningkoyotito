package com.koyotito.project.services;

import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.koyotito.project.model.Invitaciones;
import com.koyotito.project.repository.InvitacionRepo;

@Service
public class InvitacionService {
	@Autowired
	private InvitacionRepo inviRepo;
	
	public Invitaciones save(Invitaciones invi) {
		return inviRepo.save(invi);
	}
	public void delete(Invitaciones invi) {
		inviRepo.delete(invi);
	}
	
	public Invitaciones findById(Long id) {
		Optional<Invitaciones> op = inviRepo.findById(id);
		if(op.isPresent()) {
			return op.get();
		}
		return null;
	}
	
	public Invitaciones generarInvitacion(Long idGrupo) {
		Invitaciones invi = new Invitaciones();
		String urlinvi = "http://localhost:4200/grupo/" + idGrupo.toString();
		invi.setUrl_invitacion(urlinvi);
		return save(invi);
	}
	
}
