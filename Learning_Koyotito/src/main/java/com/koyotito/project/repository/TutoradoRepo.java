package com.koyotito.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.koyotito.project.model.Tutorado;

@Repository
public interface TutoradoRepo extends JpaRepository<Tutorado, Long> {
	List<Tutorado> findByTutorIdTutor(Long id);
}
