package com.server.glookup.Project;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ProjectService {
	
	@Autowired
	private ProjectRepository projectRepository;
	
	public void createProject(Project project) {
		projectRepository.save(project);
	}
	
	public Collaborator[] getProjects(int studentId) {
		Object[] projects = projectRepository.getProjectsByStudentId(studentId).toArray();
		Collaborator[] response = new Collaborator[projects.length];
		
		int index = 0;
		for (Object o: projects) {
			Project project = ((Project)o);
			if (project.getCollaborator_b() == studentId) 
				response[index++] = new Collaborator(project.getCollaborator_a(), project.getProject_name(), project.getStatus());
			else 
				response[index++] = new Collaborator(project.getCollaborator_b(), project.getProject_name(), project.getStatus());
		}
		
		return response;
	}

}
