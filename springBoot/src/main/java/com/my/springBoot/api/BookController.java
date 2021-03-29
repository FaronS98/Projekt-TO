package com.my.springBoot.api;

import com.my.springBoot.model.Books;
import com.my.springBoot.service.BooksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.util.List;

@Controller
@RequestMapping("v1/Books")
public class BookController {

    @Autowired
    BooksService booksService;

    @GetMapping("/list")
    @ResponseBody
    public List<Books> getBooks() {return booksService.getBooks() ;}

}
