package com.my.springBoot.model;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "books")
@Data
public class Books {
    @Id
    private String id;
    private String name;
    private Long price;
}