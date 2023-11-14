package com.server.glookup.Student;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Rating {
	
	@JsonProperty("name")
	private String name;
	
	@JsonProperty("rating")
	private double rating;
	
	@JsonProperty("collaborate")
	private boolean collaborateAgain;
	
	public Rating() {
		
	}
	
	public Rating(String name, double rating, boolean collaborateAgain) {
		this.name = name;
		this.rating = rating;
		this.collaborateAgain = collaborateAgain;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public double getRating() {
		return rating;
	}

	public void setRating(double rating) {
		this.rating = rating;
	}

	public boolean getCollaborateAgain() {
		return this.collaborateAgain;
	}

	public void setCollaborateAgain(boolean collaborateAgain) {
		this.collaborateAgain = collaborateAgain;
	}
	
	

}
