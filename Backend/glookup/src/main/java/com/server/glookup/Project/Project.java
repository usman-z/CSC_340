package com.server.glookup.Project;


import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@Table(name="Project")
@NoArgsConstructor
@AllArgsConstructor
public class Project {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@JsonProperty("primaryKey")
	private int primaryKey;
	
	@JsonProperty("collaboratorA")
	private int collaborator_a;
	
	public int getPrimaryKey() {
		return primaryKey;
	}

	public void setPrimaryKey(int primaryKey) {
		this.primaryKey = primaryKey;
	}

	@JsonProperty("collaboratorB")
	private int collaborator_b;
	
	@JsonProperty("projectName")
	private String project_name;
	
	@JsonProperty("status")
	private String status;
	
	public int getCollaborator_a() {
		return collaborator_a;
	}

	public void setCollaborator_a(int collaborator_a) {
		this.collaborator_a = collaborator_a;
	}

	public int getCollaborator_b() {
		return collaborator_b;
	}

	public void setCollaborator_b(int collaborator_b) {
		this.collaborator_b = collaborator_b;
	}

	public String getProject_name() {
		return project_name;
	}

	public void setProject_name(String project_name) {
		this.project_name = project_name;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String toString() {
		return "collaboratorA: "+collaborator_a+", collaboratorB: "+collaborator_b+", projectName:"+project_name+", status: "+status;
	}
}
