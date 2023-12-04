package com.server.glookup.Student;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PathVariable;

@Service
public class StudentService {
	
	@Autowired
	private StudentRepository studentRepository;
	
	public List<Student> getAllStudents() {
		return studentRepository.findAll();
	}
	
	public Email getEmailInfo(int senderId, int receiverId) {
		Optional<Student> senderObj = getStudent(senderId);
		Optional<Student> receiverObj = getStudent(receiverId);
		
		Student sender = senderObj.get();
		Student receiver = receiverObj.get();
		
		if(sender != null && receiver != null) {
			Email emailInfo = new Email(sender.getName(), sender.getEmail(), receiver.getName(), receiver.getEmail());
			return emailInfo;
		}
		
		return null;
	}
	
	public Optional<Student> getStudent(int studentId) {
		return studentRepository.findById(studentId);
	}
	
	public Optional<Student> getStudent(String studentName) {
		return studentRepository.findByName(studentName);
	}
	
	public List<Student> getStudents(String studentName) {
		return studentRepository.findAllByName(studentName);
	}
	
	public Student searchStudent(Student student) {
	    Student existingStudent = studentRepository.findByUsernameAndPassword(student.getEmail(), student.getPassword());
	    if (existingStudent != null) {
	    		return existingStudent;
	    }
	    return null;
	}
	
	public void createStudent(Student student) {
		studentRepository.save(student);
	}
	
	public void updateStudent(Student student) {
	    Student existingStudent = studentRepository.getReferenceById(student.getId());
	    if (existingStudent != null) {
	        existingStudent.setName(student.getName());
	        existingStudent.setEmail(student.getEmail());
	        existingStudent.setGithubId(student.getGithubId());
	        existingStudent.setPassword(student.getPassword());
	        existingStudent.setRating(student.getRating());
	        existingStudent.setTotal_collaborators(student.getTotal_collaborators());
	        existingStudent.setTotal_ratings(student.getTotal_ratings());
	        existingStudent.setYes_collaborators(student.getYes_collaborators());
	        existingStudent.setApproved(student.isApproved());
	        studentRepository.save(existingStudent);
	    }
	}
        
        public void updatesStudent(Student student, int studentId) {
            Student existingStudent = getStudent(studentId).get();
            if(existingStudent != null) {
	    	existingStudent.setName(student.getName());
	    	existingStudent.setEmail(student.getEmail());
	    	existingStudent.setPassword(student.getPassword());
                existingStudent.setApproved(student.isApproved());
	    	studentRepository.save(existingStudent);
            }
	}
	
	public void rateStudent(Rating rating) {
		double newRating = rating.getRating();
		Optional<Student> stu = getStudent(rating.getStudentId());
		if(!stu.isEmpty()) {
		    Student existingStudent = stu.get();
		    if (existingStudent != null) {
		        double prevRating = existingStudent.getRating();
		        int totalRatings = existingStudent.getTotal_ratings();
		        existingStudent.setTotal_ratings(totalRatings);
		        double updatedRating = (prevRating * totalRatings + newRating) / (totalRatings+1);
		        existingStudent.setRating(updatedRating);
		        boolean collaborateAgain = rating.getCollaborateAgain(); 
		        if(collaborateAgain)
		        	existingStudent.setYes_collaborators(existingStudent.getYes_collaborators()+1);
		        existingStudent.setTotal_collaborators(existingStudent.getTotal_collaborators()+1);
		        existingStudent.setTotal_ratings(existingStudent.getTotal_ratings()+1);
		        updateStudent(existingStudent);
		    }
		}
	}
	
	public void deleteStudent(int id) {
		studentRepository.deleteById(id);
	}

}
