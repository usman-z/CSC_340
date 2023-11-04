package com.server.glookup.Student;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/student")
public class StudentController {
	
	@Autowired
	private StudentService studentService;
	
	@GetMapping("/all")
	public List<Student> getAllStudents() {
		return studentService.getAllStudents();
	}
	
    @GetMapping("/{studentId}")
    public Student getStudent(@PathVariable int studentId) {
    	return studentService.getStudent(studentId);
    }
	
	@PostMapping("/add")
	public ResponseEntity<Student> addStudent(@RequestBody Student student) {
		studentService.createStudent(student);
		return new ResponseEntity<>(student,HttpStatus.CREATED);
	}
	
	@PostMapping("/update")
	public ResponseEntity<Student> updateStudent(@RequestBody Student student) {
		studentService.updateStudent(student);
		return new ResponseEntity<>(student, HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{studentId}")
	public ResponseEntity<String> deleteStudent(@PathVariable int studentId) {
		studentService.deleteStudent(studentId);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
