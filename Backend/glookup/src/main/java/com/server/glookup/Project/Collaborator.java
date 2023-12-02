package com.server.glookup.Project;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

public class Collaborator {
	
	@JsonProperty("projectId")
	private int projectId;
	
	public int getProjectId() {
		return projectId;
	}

	public void setProjectId(int projectId) {
		this.projectId = projectId;
	}

	@JsonProperty("collaborator")
	private int collaborator;
	
	@JsonProperty("projectName")
	private String projectName;
	
	@JsonProperty("status")
	private String status;
	
	public Collaborator() {
		
	}

	public Collaborator(int projectId, int collaborator, String projectName, String status) {
		this.projectId = projectId;
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
