package com.koyotito.project.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.koyotito.project.model.Invitaciones;

@Repository
public interface InvitacionRepo extends JpaRepository<Invitaciones, Long>{
	
	public Invitaciones save(Invitaciones invi);
}
