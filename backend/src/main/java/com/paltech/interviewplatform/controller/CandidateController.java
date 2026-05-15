package com.paltech.interviewplatform.controller;

import com.paltech.interviewplatform.model.Candidate;
import com.paltech.interviewplatform.repository.CandidateRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/candidates")
@CrossOrigin("*")

public class CandidateController {

    @Autowired
    private CandidateRepository repository;

    @GetMapping
    public List<Candidate> getCandidates(){

        return repository.findAll();
    }

    @PostMapping
    public Candidate addCandidate(@RequestBody Candidate candidate){

        return repository.save(candidate);
    }
}