package com.paltech.interviewplatform.controller;

import com.paltech.interviewplatform.model.JobRole;
import com.paltech.interviewplatform.repository.JobRoleRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/roles")
@CrossOrigin("*")
public class JobRoleController {

    @Autowired
    private JobRoleRepository repository;

    @GetMapping
    public List<JobRole> getAllRoles() {
        return repository.findAll();
    }

    @PostMapping
    public JobRole createRole(@RequestBody JobRole role) {
        return repository.save(role);
    }
}