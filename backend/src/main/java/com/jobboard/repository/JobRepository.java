package com.jobboard.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.jobboard.entity.Job;

public interface JobRepository extends JpaRepository<Job, Long>{

}
