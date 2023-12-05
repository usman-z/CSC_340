package com.server.glookup.Project;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/project")
@CrossOrigin(origins = "http://localhost:4200")
public class ProjectController {
	
	@Autowired
	private ProjectService projectService;
	
	@PostMapping("/add")
	public ResponseEntity<Project> addProject(@RequestBody Project project) {
		projectService.createProject(project);
		return new ResponseEntity<>(HttpStatus.CREATED);
	}
	
	@GetMapping("/get/{studentId}")
	public ResponseEntity<Collaborator[]> getProject(@PathVariable int studentId) {
		return new ResponseEntity<>(projectService.getProjects(studentId), HttpStatus.OK);
	}
	
	@GetMapping("/done/{projectId}")
	public ResponseEntity<Project> makeProjectComplete(@PathVariable int projectId) {
		return new ResponseEntity<>(projectService.makeDone(projectId), HttpStatus.OK);
	}
	
	@GetMapping("/active/{projectId}")
	public ResponseEntity<Project> makeProjectActive(@PathVariable int projectId) {
		return new ResponseEntity<>(projectService.makeActive(projectId), HttpStatus.OK);
	}
	
	@GetMapping("/delete/{projectId}")
	public ResponseEntity<Project> deleteProject(@PathVariable int projectId) {
		projectService.deleteProject(projectId);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@GetMapping("/collaborators/{studentId}")
	public Object[] getCollaborators(@PathVariable int studentId) {
		return projectService.getAllCollaborators(studentId);
	}

}
