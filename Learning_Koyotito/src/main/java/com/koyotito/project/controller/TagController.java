package com.koyotito.project.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.koyotito.project.model.Tag;
import com.koyotito.project.services.TagService;

@RestController
@RequestMapping("/tag")
@CrossOrigin(origins = "http://localhost:4200")
public class TagController {
	@Autowired
	private TagService tagService;
	
	@GetMapping("/consultar")
	public List<Tag> consultar(){
		return tagService.findAll();
	}
}
