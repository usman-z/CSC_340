package com.server.glookup.Project;

import java.util.HashSet;
import java.util.Optional;

import org.hibernate.mapping.Set;
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
				response[index++] = new Collaborator(project.getPrimaryKey(), project.getCollaborator_a(), project.getCreatorId(), project.getProject_name(), project.getStatus());
			else 
				response[index++] = new Collaborator(project.getPrimaryKey(), project.getCollaborator_b(), project.getCreatorId(), project.getProject_name(), project.getStatus());
		}
		
		return response;
	}
	
	public Project makeDone(int projectId) {
		Optional<Project> existingProject = projectRepository.findById(projectId);
		if (existingProject.get() != null) {
			Project project = existingProject.get();
			project.setStatus("done");
			projectRepository.save(project);
			return project;
		}
		return null;
	}
	
	public Object[] getAllCollaborators(int studentId) {
		Object[] projects = projectRepository.getProjectsByStudentId(studentId).toArray();
		HashSet<Integer> set = new HashSet<>();

		for (Object o: projects) {
			Project p = ((Project)o);
			if(p.getStatus().equals("done")) {
				if (p.getCollaborator_a() != studentId) 
					set.add(p.getCollaborator_a());
				else
					set.add(p.getCollaborator_b());
			}
		}
		
		
		return set.toArray();
	}
	
	public void deleteProject(int projectId) {
		projectRepository.deleteById(projectId);
	}

}
