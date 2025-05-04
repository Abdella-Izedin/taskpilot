package com.taskpilot.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.taskpilot.model.Project;

@Repository
public interface ProjectRepository extends JpaRepository<Project, Long>{
	
	@Query("FROM Project p WHERE p.author.username = :username")
	List<Project> findAllProjectsByUsername(String username);
}
