package com.server.glookup.Project;

import com.fasterxml.jackson.annotation.JsonProperty;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

public class Collaborator {
	
	@JsonProperty("projectId")
	private int projectId;
	
	@JsonProperty("creatorId")
	private int creatorId;

	@JsonProperty("collaborator")
	private int collaborator;
	
	@JsonProperty("projectName")
	private String projectName;
	
	@JsonProperty("status")
	private String status;
	
	public Collaborator() {
		
	}

	public Collaborator(int projectId, int collaborator, int creatorId, String projectName, String status) {
		this.projectId = projectId;
		this.collaborator = collaborator;
		this.creatorId = creatorId;
		this.projectName = projectName;
		this.status = status;
	}
	
	public int getProjectId() {
		return projectId;
	}

	public int getCreatorId() {
		return creatorId;
	}

	public void setCreatorId(int creatorId) {
		this.creatorId = creatorId;
	}

	public void setProjectId(int projectId) {
		this.projectId = projectId;
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
