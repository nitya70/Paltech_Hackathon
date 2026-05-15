package com.paltech.interviewplatform.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;



@Document(collection = "interviews")

@Data
@NoArgsConstructor
@AllArgsConstructor

public class Interview {

    @Id
    private String id;

    private String candidate;

    private String interviewerEmail;

    private String round;

    private String date;
    private String time;
    private String status;
}
