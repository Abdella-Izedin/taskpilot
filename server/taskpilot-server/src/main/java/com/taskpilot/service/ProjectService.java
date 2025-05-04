package com.taskpilot.service;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.taskpilot.model.Project;
import com.taskpilot.repository.ProjectRepository;

@Service
@Transactional
public class ProjectService {
	private final ProjectRepository projectRepository;
	
	public ProjectService(ProjectRepository projectRepository) {
		this.projectRepository = projectRepository;
	}
	
	public Project findByProjectId(Long projectId) {
		return projectRepository.findById(projectId).orElse(null);
	}
	
	public List<Project> findAllProjectsByUsername(String username){
		return projectRepository.findAllProjectsByUsername(username);
	}
}
