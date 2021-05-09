package com.my.springBoot.service;
import com.my.springBoot.api.dto.BooksDTO;
import com.my.springBoot.common.ValidationException;
import com.my.springBoot.model.Books;
import com.my.springBoot.repository.BooksRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;
import java.util.Optional;

@Service
public class BooksService {


        @Autowired
        BooksRepository booksRepository;

        public List<Books> getBooks() {
            List<Books> books = booksRepository.findAll();
            return books;
        }

        /*public Books findBookByAuthor(String authorName, String authorSurname){
            Optional<Books> booksOptional = booksRepository.findById()
            if(booksOptional.isPresent()){
                return booksOptional.get();
            } else {
                throw new com.my.webapp.common.ValidationException("Book doesn't exist in database");

            }*/


    public Books addModifyBook(BooksDTO booksDTO) {
        if (booksDTO.getId() == null) {
            Books books = new Books();
            return saveBook(books, booksDTO);
        } else {
            Optional<Books> booksOptional = booksRepository.findById(booksDTO.getId());
            if (booksOptional.isPresent()) {
                return saveBook(booksOptional.get(), booksDTO);
            } else {
                throw new ValidationException("Book not found");
            }
        }
    }

    Books saveBook(Books books, BooksDTO booksDTO) {
        books.setBookName(booksDTO.getBookName());
        books.setAuthorName(booksDTO.getAuthorName());
        books.setAuthorSurname(booksDTO.getAuthorSurname());
        books.setPhotoName(booksDTO.getPhotoName());
        books.setType(booksDTO.getType());
        Books savedBook = booksRepository.save(books);
        return savedBook;
    }
}
