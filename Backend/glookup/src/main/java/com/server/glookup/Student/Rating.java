package com.server.glookup.Student;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Rating {
	
	@JsonProperty("studentId")
	private int studentId;
	
	@JsonProperty("rating")
	private double rating;
	
	@JsonProperty("collaborate")
	private boolean collaborateAgain;
	
	public Rating() {
		
	}
	
	public Rating(int studentId, double rating, boolean collaborateAgain) {
		this.studentId = studentId;
		this.rating = rating;
		this.collaborateAgain = collaborateAgain;
	}

	public int getStudentId() {
		return studentId;
	}

	public void setStudentId(int studentId) {
		this.studentId = studentId;
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
