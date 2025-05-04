package com.taskpilot.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.taskpilot.model.Project;
import com.taskpilot.service.ProjectService;

@RestController
@RequestMapping("/project")
public class ProjectController {
	private final ProjectService projectService;
	
	public ProjectController(ProjectService projectService) {
		this.projectService = projectService;
	}
	
	@GetMapping("/id/{id}")
	public Project getProjectById(@PathVariable Long id) {
		return projectService.findByProjectId(id);
	}
	
	@GetMapping("/username/{username}")
	public List<Project> getAllProjectsByUsername(@PathVariable String username){
		return projectService.findAllProjectsByUsername(username);
	}
}
