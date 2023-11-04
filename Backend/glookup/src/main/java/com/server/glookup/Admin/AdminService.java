package com.server.glookup.Admin;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.server.glookup.Student.Student;

@Service
public class AdminService {
	
	@Autowired
	public AdminRepository adminRepository;
	
	public List<Admin> getAllAdmins() {
		return adminRepository.findAll();
	}
	
	public Admin getAdmin(int id) {
		return adminRepository.getReferenceById(id);
	}
	
	public void createAdmin(Admin admin) {
		adminRepository.save(admin);
	}
	
	public void updateAdmin(Admin admin) {
		adminRepository.save(admin);
	}
	
	public void deleteAdmin(int id) {
		adminRepository.deleteById(id);
	}

}
