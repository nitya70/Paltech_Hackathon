package com.paltech.interviewplatform.controller;

import com.paltech.interviewplatform.model.Feedback;
import com.paltech.interviewplatform.repository.FeedbackRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/feedback")
@CrossOrigin("*")

public class FeedbackController {

    @Autowired
    private FeedbackRepository repository;

    @GetMapping
    public List<Feedback> getFeedback(){

        return repository.findAll();
    }

    @PostMapping
    public Feedback submit(@RequestBody Feedback feedback){

        return repository.save(feedback);
    }
}