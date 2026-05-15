package com.paltech.interviewplatform.controller;
import com.paltech.interviewplatform.model.Interview;
import com.paltech.interviewplatform.repository.InterviewRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import java.util.List;


@RestController
@RequestMapping("/api/interviews")
@CrossOrigin("*")

public class InterviewController {

    @Autowired
    private InterviewRepository repository;

    @GetMapping("/interviewer/{email}")
    public List<Interview> getByInterviewer(@PathVariable String email){

    return repository.findByInterviewerEmail(email);
}

    @PostMapping
    public Interview schedule(@RequestBody Interview interview){
        
        return repository.save(interview);
    }
}