package com.server.glookup.Student;

import com.fasterxml.jackson.annotation.JsonProperty;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="Student")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Student {
	
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	@JsonProperty("id")
	private int id;
	
	@JsonProperty("name")
	private String name;
	
	@JsonProperty("email")
	private String email;
	
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
	
	public Student(String name, String email, String password, double rating, int total_ratings, int total_collaborators, int yes_collaborators) {
		this.name = name;
		this.email = email;
		this.password = password;
		this.rating = rating;
		this.total_ratings = total_ratings;
		this.total_collaborators = total_collaborators;
		this.yes_collaborators = yes_collaborators;
	}

}
