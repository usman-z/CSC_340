package com.server.glookup.Student;

import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@Entity
@Table(name="Student")
@NoArgsConstructor
@AllArgsConstructor
public class Student {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@JsonProperty("id")
	private int id;
	
	@JsonProperty("name")
	private String name;
	
	@JsonProperty("email")
	private String email;
	
	@JsonProperty("githubId")
	private String githubId;
	
	@JsonProperty("password")
	private String password;
	
	@JsonProperty("rating")
	private double rating;
	
	@JsonProperty("total_ratings")
	private int total_ratings;
	
	@JsonProperty("total_collaborators")
	private int total_collaborators;
	
	@JsonProperty("yes_collaborators")
	private int yes_collaborators;
	
	@JsonProperty("approved")
	private boolean approved;
	
	public Student(String name, String email, String githubId, String password, double rating, int total_ratings, int total_collaborators, int yes_collaborators) {
		this.name = name;
		this.email = email;
		this.githubId = githubId;
		this.password = password;
		this.rating = rating;
		this.total_ratings = total_ratings;
		this.total_collaborators = total_collaborators;
		this.yes_collaborators = yes_collaborators;
		this.approved = false;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getGithubId() {
		return githubId;
	}

	public void setGithubId(String githubId) {
		this.githubId = githubId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public double getRating() {
		return rating;
	}

	public void setRating(double rating) {
		this.rating = rating;
	}

	public int getTotal_ratings() {
		return total_ratings;
	}

	public void setTotal_ratings(int total_ratings) {
		this.total_ratings = total_ratings;
	}

	public int getTotal_collaborators() {
		return total_collaborators;
	}

	public void setTotal_collaborators(int total_collaborators) {
		this.total_collaborators = total_collaborators;
	}

	public int getYes_collaborators() {
		return yes_collaborators;
	}

	public void setYes_collaborators(int yes_collaborators) {
		this.yes_collaborators = yes_collaborators;
	}
	
	public boolean isApproved() {
		return approved;
	}

	public void setApproved(boolean trueOrFalse) {
		this.approved = trueOrFalse;
	}
	
	

}
