package com.my.springBoot.repository;
import com.my.springBoot.model.Books;
import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface BooksRepository extends MongoRepository<Books, String> {
    //Books findById(ObjectId id);
}
