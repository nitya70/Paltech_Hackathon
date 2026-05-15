package com.paltech.interviewplatform.repository;

import com.paltech.interviewplatform.model.Candidate;

import org.springframework.data.mongodb.repository.MongoRepository;

public interface CandidateRepository extends MongoRepository<Candidate, String> {
}