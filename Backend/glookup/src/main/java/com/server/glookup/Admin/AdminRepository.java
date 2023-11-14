package com.server.glookup.Admin;

import java.util.Optional;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface AdminRepository extends JpaRepository<Admin, Integer>{
    
    Optional<Admin> findByName(String name);
	
	@Query("SELECT a FROM Admin a WHERE a.email = :username AND a.password = :password")
	Admin findByUsernameAndPassword(String username, String password);

}
