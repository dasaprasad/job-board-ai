package com.jobboard.controller;

import com.jobboard.entity.Application;
import com.jobboard.repository.ApplicationRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/applications")
@CrossOrigin("*")
public class ApplicationController {

    private final ApplicationRepository repository;

    public ApplicationController(ApplicationRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Application> getAll() {
        return repository.findAll();
    }

    @PostMapping
    public Application apply(@RequestBody Application application) {
        return repository.save(application);
    }
}
