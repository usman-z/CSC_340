package com.server.glookup.Student;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface StudentRepository extends JpaRepository<Student, Integer>{
	
	Optional<Student> findByName(String name);
	
	@Query("SELECT s FROM Student s WHERE s.email = :username AND s.password = :password")
	Student findByUsernameAndPassword(String username, String password);
}
