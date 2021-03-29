package com.my.springBoot.repository;
import com.my.springBoot.model.Books;
import org.springframework.data.mongodb.repository.MongoRepository;


public interface BooksRepository extends MongoRepository<Books, Long> {
}
