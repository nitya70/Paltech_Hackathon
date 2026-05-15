package com.paltech.interviewplatform.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "feedback")

@Data
@NoArgsConstructor
@AllArgsConstructor

public class Feedback {

    @Id
    private String id;

    private String candidate;

    private int communication;

    private int technical;

    private int problemSolving;

    private String recommendation;

    private String comments;
}