package com.paltech.interviewplatform.repository;

import com.paltech.interviewplatform.model.JobRole;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface JobRoleRepository extends MongoRepository<JobRole, String> {
}