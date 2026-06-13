package com.jobboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jobboard.entity.Application;

public interface ApplicationRepository extends JpaRepository<Application, Long>{

}
