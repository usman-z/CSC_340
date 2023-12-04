package com.server.glookup.Student;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Email {

	@JsonProperty("receiverName")
	private String receiverName;
	
	@JsonProperty("receiverEmail")
	private String receiverEmail;
	
	@JsonProperty("senderName")
	private String senderName;
	
	@JsonProperty("senderEmail")
	private String senderEmail;
	
	public Email () {
		
	}
	
	public Email (String senderName, String senderEmail, String receiverName, String receiverEmail) {
		this.receiverName = receiverName;
		this.receiverEmail = receiverEmail;
		this.senderName = senderName;
		this.senderEmail = senderEmail;
	}
	
	public String getReceiverName() {
		return receiverName;
	}

	public void setReceiverName(String receiverName) {
		this.receiverName = receiverName;
	}

	public String getReceiverEmail() {
		return receiverEmail;
	}

	public void setReceiverEmail(String receiverEmail) {
		this.receiverEmail = receiverEmail;
	}

	public String getSenderName() {
		return senderName;
	}

	public void setSenderName(String senderName) {
		this.senderName = senderName;
	}

	public String getSenderEmail() {
		return senderEmail;
	}

	public void setSenderEmail(String senderEmail) {
		this.senderEmail = senderEmail;
	}
	
	
	
}
