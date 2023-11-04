package com.server.glookup.Student;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class StudentService {
	
	@Autowired
	private StudentRepository studentRepository;
	
	public List<Student> getAllStudents() {
		return studentRepository.findAll();
	}
	
	public Student getStudent(int studentId) {
		return studentRepository.getReferenceById(studentId);
	}
	
	public void createStudent(Student student) {
		studentRepository.save(student);
	}
	
	public void updateStudent(Student student) {
		studentRepository.save(student);
	}
	
	public void deleteStudent(int id) {
		studentRepository.deleteById(id);
	}

}
