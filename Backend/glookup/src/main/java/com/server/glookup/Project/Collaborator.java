package com.server.glookup.Project;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

public class Collaborator {
	
	@JsonProperty("collaborator")
	private int collaborator;
	
	@JsonProperty("projectName")
	private String projectName;
	
	@JsonProperty("status")
	private String status;
	
	public Collaborator() {
		
	}

	public Collaborator(int collaborator, String projectName, String status) {
		this.collaborator = collaborator;
		this.projectName = projectName;
		this.status = status;
	}

	public int getCollaborator() {
		return collaborator;
	}

	public void setCollaborator(int collaborator) {
		this.collaborator = collaborator;
	}

	public String getProjectName() {
		return projectName;
	}

	public void setProjectName(String projectName) {
		this.projectName = projectName;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}
}
