package com.paltech.interviewplatform.repository;

import com.paltech.interviewplatform.model.User;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface UserRepository
        extends MongoRepository<User, String> {

    User findByEmail(String email);

    boolean existsByEmail(String email);
}