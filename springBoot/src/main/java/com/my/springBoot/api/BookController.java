package com.my.springBoot.api;

import com.my.springBoot.api.dto.BooksDTO;
import com.my.springBoot.model.Books;
import com.my.springBoot.service.BooksService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Controller
@RequestMapping("book")
public class BookController {

    @Autowired
    BooksService booksService;

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping("")
    @ResponseBody
    public List<Books> getBooks() {return booksService.getBooks() ;}

    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping("")
    @ResponseBody
    public Books addModifyBook(@RequestBody BooksDTO booksDTO) {
        return booksService.addModifyBook(booksDTO);
    }
}
