package com.paltech.interviewplatform.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
@Document(collection = "roles")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class JobRole {

    @Id
    private String id;

    private String title;

    private String description;

    private String status;
}