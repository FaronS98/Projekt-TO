package com.my.springBoot.service;

import com.my.springBoot.model.Books;
import com.my.springBoot.repository.BooksRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
@Service
public class BooksService {


        @Autowired
        BooksRepository repo;

        public List<Books> getBooks() {
            List<Books> books = repo.findAll();
            return books;
        }
}
