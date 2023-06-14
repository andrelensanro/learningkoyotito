package com.koyotito.project.services;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.slf4j.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.koyotito.project.model.Profesor;
import com.koyotito.project.model.Tutor;
import com.koyotito.project.model.Tutorado;
import com.koyotito.project.model.Usuario;
import com.koyotito.project.repository.TutorRepo;

@Service
public class TutorService {
	
	private final Logger logger = (Logger)LoggerFactory.getLogger(TutorService.class);
	
	@Autowired
	private TutorRepo tutorRepo;
	@Autowired
	private TutoradoService tutoradoService;
	@Autowired
	private UsuarioService usuarioService;
	
	public Tutor save(Tutor tutor) {
		return tutorRepo.save(tutor);
	}
	
	public Tutor findById(Long id) {
		Optional<Tutor> tutor = tutorRepo.findById(id);
		if(tutor.isPresent())
			return tutor.get();
		return null;
	}
	
	public void delete(Tutor tutor) {
		tutorRepo.delete(tutor);
	}
	
	public void deleteById(Long id) {
		tutorRepo.deleteById(id);
	}
	
	
	public Tutor getTutorByUsuario(Usuario usuario) {
		Tutor tutor = new Tutor();
		tutor = usuario.getTutor();
		return tutor;
	}
	public Profesor getProfesorByUsuario(Usuario usuario) {
		Profesor profesor = new Profesor();
		profesor = usuario.getProfesor();
		return profesor;
	}
	public List<Tutorado> getTutoradosByIdTutor(Long idTutor){
		return tutoradoService.findByTutorIdTutor(idTutor);
	}
	
	public Tutorado getTutoradoByEmailTutor(String correo, String pseudonimo) {
		logger.info("!" + pseudonimo + "!");
		logger.info(correo);
		Usuario usuario = usuarioService.findByCorreo(correo);
		logger.info("2222222222 el id del usr del tutor " + usuario.getIdUsuario());
		if(usuario!=null) {
			Tutor tutor = this.getTutorByUsuario(usuario);
			logger.info("2222222222 el id del tutor " + tutor.getIdTutor());
			List<Tutorado> lista = new ArrayList<>();
			lista = getTutoradosByIdTutor(tutor.getIdTutor());
			logger.info("2222222222la lista tiene " + lista.size());
			for(Tutorado t: lista) {
				if(t.getPseudonimo().equals(pseudonimo)) {
					logger.info("2222222222el pseudonimo biscado es " + t.getPseudonimo());
					return t;
				}
				logger.info("!" +t.getPseudonimo()+ "!");
			}
		}
		return null;
	}
	
	
	
}
