package com.koyotito.project.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;


import org.springframework.security.core.userdetails.User;

@Service
public class UserDetailsServiceImpl implements UserDetailsService{

	@Autowired
	public UsuarioService usrService;
	private static final Logger logger = LoggerFactory.getLogger(UserDetailsServiceImpl.class);
	
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		var usuario = usrService.findByCorreo(username);
		 
		logger.info("username que intenta entrar ", username);
		logger.info("password ", usuario.getPassword());
		
		if (usuario == null) 
		      throw new UsernameNotFoundException(username);
		
		String rol;
		Long idp; // domingo 11/06/23
		Long idt; // domingo 11/06/23
		if(usuario.getIdTipoUsuario()==2) {
			rol = "PROFE";
			idp = usuario.getProfesor().getIdProfesor(); // domingo 11/06/23
		}else { 
			rol = "TUTOR";
			idt = usuario.getTutor().getIdTutor(); // domingo 11/06/23
		}
		
		Long idd = usuario.getIdUsuario(); // domingo 11/06/23
		 
		
		return User.withUsername(username)
				.password(usuario.getPassword())
				.roles(rol)
				.build();
		
	}

}