package com.server.glookup.Student;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentService {
	
	@Autowired
	private StudentRepository studentRepository;
	
	public List<Student> getAllStudents() {
		return studentRepository.findAll();
	}
	
	public Optional<Student> getStudent(int studentId) {
		return studentRepository.findById(studentId);
	}
	
	public Optional<Student> getStudent(String studentName) {
		return studentRepository.findByName(studentName);
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
	
	public void rateStudent(Student student) {
		double newRating = student.getRating();
		Optional<Student> stu = getStudent(student.getName());
		if(!stu.isEmpty()) {
		    Student existingStudent = stu.get();
		    if (existingStudent != null) {
		        double prevRating = existingStudent.getRating();
		        int totalRatings = existingStudent.getTotal_ratings()+1;
		        existingStudent.setTotal_ratings(totalRatings);
		        float updatedRating = (float)((prevRating * totalRatings) + (newRating)) / (totalRatings);
		        existingStudent.setRating(updatedRating);
		        updateStudent(existingStudent);
		    }
		}
	}
	
	public void deleteStudent(int id) {
		studentRepository.deleteById(id);
	}

}
