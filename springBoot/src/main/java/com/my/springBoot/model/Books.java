package com.my.springBoot.model;
import lombok.Data;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.FieldType;
import org.springframework.data.mongodb.core.mapping.MongoId;

@Document(collection = "books")
@Data
public class Books {
    @MongoId(value = FieldType.OBJECT_ID)
    private String id;
    private String bookName;
    private String authorName;
    private String authorSurname;
    private String photoName;
    private String type;
}