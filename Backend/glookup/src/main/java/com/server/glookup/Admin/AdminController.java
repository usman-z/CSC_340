package com.server.glookup.Admin;

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

import com.server.glookup.Student.Student;

@RestController
@RequestMapping("/admin")
@CrossOrigin(origins = "*")
public class AdminController {
	
	@Autowired
	public AdminService adminService;
	
	@GetMapping("/all")
	public List<Admin> getAllAdmins() {
		return adminService.getAllAdmins();
	}
	
    @GetMapping("/get/{adminId}")
    public Admin getAdmin(@PathVariable int adminId) {
    	Admin admin = adminService.getAdmin(adminId).get();
    	if(admin != null) 
    		return admin;
    	else
    		return null;
    }
	
	@PostMapping("/add")
	public ResponseEntity<Admin> addAdmin(@RequestBody Admin admin) {
		adminService.createAdmin(admin);
		return new ResponseEntity<>(admin,HttpStatus.CREATED);
	}
        
         @PostMapping("/search")
        public ResponseEntity<Admin> searchAdmin(@RequestBody Admin admin) {
    	Admin searchAdmin = adminService.searchAdmin(admin);
    	if (searchAdmin != null)
    		return new ResponseEntity<>(searchAdmin, HttpStatus.OK);
    	else
    		return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }
	
	@PostMapping("/update/{adminId}")
	public ResponseEntity<Admin> updateAdmin(@RequestBody Admin admin, int adminId) {
		adminService.updateAdmin(admin, adminId);
		return new ResponseEntity<>(HttpStatus.OK);
	}
	
	@DeleteMapping("/delete/{adminId}")
	public ResponseEntity<String> deleteStudent(@PathVariable int adminId) {
		adminService.deleteAdmin(adminId);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
