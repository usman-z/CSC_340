package com.server.glookup.Admin;

import java.util.List;
import java.util.Optional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AdminService {
	
	@Autowired
	public AdminRepository adminRepository;
	
	public List<Admin> getAllAdmins() {
		return adminRepository.findAll();
	}
	
	public Optional<Admin> getAdmin(int adminId) {
		return adminRepository.findById(adminId);
	}
	
	public void createAdmin(Admin admin) {
		adminRepository.save(admin);
	}
	
	public void updateAdmin(Admin admin, int adminId) {
    	Admin existingAdmin = getAdmin(adminId).get();
    	if(existingAdmin != null) {
	    	existingAdmin.setName(admin.getName());
	    	existingAdmin.setEmail(admin.getEmail());
	    	existingAdmin.setPassword(admin.getPassword());
	    	adminRepository.save(existingAdmin);
    	}
	}
	
	public void deleteAdmin(int id) {
		adminRepository.deleteById(id);
	}

}
