package com.jobboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jobboard.entity.User;

public interface UserRepository  extends JpaRepository<User, Long>{

}
