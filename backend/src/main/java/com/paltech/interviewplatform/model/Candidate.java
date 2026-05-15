package com.paltech.interviewplatform.model;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "candidates")
public class Candidate {

    @Id
    private String id;

    private String name;
    private String email;
    private String role;
    private String status;
    private String pipelineStage;
    private String resume;

    public Candidate() {
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
}

    public String getPipelineStage() {
        return pipelineStage;
    }

    public void setPipelineStage(String pipelineStage) {
        this.pipelineStage = pipelineStage;
    }

       }
