package com.server.glookup.Student;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/student")
@CrossOrigin(origins = "*")
public class StudentController {
	
	@Autowired
	private StudentService studentService;
	
	@GetMapping("/all")
	public List<Student> getAllStudents() {
		return studentService.getAllStudents();
	}
	
    @GetMapping("/get/{studentId}")
    public ResponseEntity<Student> getStudent(@PathVariable int studentId) {
    	if (!studentService.getStudent(studentId).isEmpty())
    		return new ResponseEntity<>(studentService.getStudent(studentId).get(), HttpStatus.OK);
    	else
    		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
    
    @GetMapping("/emailInfo/{senderId}/{receiverId}")
    public ResponseEntity<Email> getStudent(@PathVariable int senderId, @PathVariable int receiverId) {
    	return new ResponseEntity<>(studentService.getEmailInfo(senderId, receiverId), HttpStatus.OK);
    }
    
    @GetMapping("/searchStudents/{studentName}")
    public ResponseEntity<List<Student>> getStudents(@PathVariable String studentName) {
        List<Student> students = studentService.getStudents(studentName);

        if (!students.isEmpty()) {
            return ResponseEntity.ok(students);
        } else {
            return ResponseEntity.notFound().build();
        }
    }
    
    @PostMapping("/search")
    public ResponseEntity<Student> searchStudent(@RequestBody Student student) {
    	Student searchStudent = studentService.searchStudent(student);
    	if (searchStudent != null)
    		return new ResponseEntity<>(searchStudent, HttpStatus.OK);
    	else
    		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
	
	@PostMapping("/add")
	public ResponseEntity<Student> addStudent(@RequestBody Student student) {
		studentService.createStudent(student);
		return new ResponseEntity<>(student,HttpStatus.CREATED);
	}
        
        @PostMapping("/updates/{studentId}")
	public ResponseEntity<Student> updatesStudent(@RequestBody Student student, @PathVariable int studentId) {
		studentService.updatesStudent(student, studentId);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@PostMapping("/update")
	public ResponseEntity<Student> updateStudent(@RequestBody Student student) {
		studentService.updateStudent(student);
		return new ResponseEntity<>(student, HttpStatus.OK);
	}
	
	@PostMapping("/rate")
	public ResponseEntity<Student> rateStudent(@RequestBody Rating rating) {
		studentService.rateStudent(rating);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{studentId}")
	public ResponseEntity<Student> deleteStudent(@PathVariable int studentId) {
		studentService.deleteStudent(studentId);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
