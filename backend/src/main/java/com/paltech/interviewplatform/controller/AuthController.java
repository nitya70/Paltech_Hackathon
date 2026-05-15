package com.paltech.interviewplatform.controller;

import com.paltech.interviewplatform.model.User;

import com.paltech.interviewplatform.repository.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.http.ResponseEntity;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin("*")

public class AuthController {

    @Autowired
    private UserRepository repository;

    @Autowired
    private BCryptPasswordEncoder encoder;

    // REGISTER

    @PostMapping("/register")
    public ResponseEntity<?> register(
            @RequestBody User user){

        if(repository.existsByEmail(user.getEmail())){

            return ResponseEntity
                    .badRequest()
                    .body("User already registered");
        }

        user.setPassword(
            encoder.encode(user.getPassword())
        );

        return ResponseEntity.ok(
            repository.save(user)
        );
    }

    // LOGIN

    @PostMapping("/login")
    public ResponseEntity<?> login(
            @RequestBody User loginUser){

        User user =
            repository.findByEmail(
                loginUser.getEmail()
            );

        if(user == null){

            return ResponseEntity
                    .status(404)
                    .body("User not registered");
        }

        if(encoder.matches(
                loginUser.getPassword(),
                user.getPassword())){

            return ResponseEntity.ok(user);

        } else {

            return ResponseEntity
                    .status(401)
                    .body("Incorrect Password");
        }
    }
}