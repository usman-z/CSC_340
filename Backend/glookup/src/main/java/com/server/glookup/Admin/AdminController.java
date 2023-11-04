package com.server.glookup.Admin;

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

import com.server.glookup.Student.Student;

@RestController
@RequestMapping("/admin")
public class AdminController {
	
	@Autowired
	public AdminService adminService;
	
	@GetMapping("/all")
	public List<Admin> getAllAdmins() {
		return adminService.getAllAdmins();
	}
	
	@GetMapping("/get/{adminId}")
	public ResponseEntity<Admin> getStudent(@PathVariable int adminId) {
		return new ResponseEntity<>(adminService.getAdmin(adminId), HttpStatus.OK);
	}
	
	@PostMapping("/add")
	public ResponseEntity<Admin> addAdmin(@RequestBody Admin admin) {
		adminService.createAdmin(admin);
		return new ResponseEntity<>(admin,HttpStatus.CREATED);
	}
	
	@PostMapping("/update")
	public ResponseEntity<Admin> updateAdmin(@RequestBody Admin admin) {
		adminService.updateAdmin(admin);
		return new ResponseEntity<>(admin,HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{adminId}")
	public ResponseEntity<String> deleteStudent(@PathVariable int adminId) {
		adminService.deleteAdmin(adminId);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
