package com.paltech.interviewplatform.repository;
import com.paltech.interviewplatform.model.Interview;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;


public interface InterviewRepository extends MongoRepository<Interview, String> {
    List<Interview> findByInterviewerEmail(String interviewerEmail);
}