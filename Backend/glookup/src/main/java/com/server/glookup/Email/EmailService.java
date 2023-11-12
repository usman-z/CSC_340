package com.server.glookup.Email;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;

@Service
public class EmailService {

    @Autowired
    private JavaMailSender javaMailSender;

    public void sendEmail(String to, String subject, String body) {
        	 
            // Try block to check for exceptions
            try {
     
                // Creating a simple mail message
                SimpleMailMessage mailMessage
                    = new SimpleMailMessage();
     
                // Setting up necessary details
                mailMessage.setFrom("glookup340@gmail.com");
                mailMessage.setTo(to);
                mailMessage.setText(body);
                mailMessage.setSubject(subject);
     
                // Sending the mail
                javaMailSender.send(mailMessage);
            }
     
            // Catch block to handle the exceptions
            catch (Exception e) {
                
            }
        }
}