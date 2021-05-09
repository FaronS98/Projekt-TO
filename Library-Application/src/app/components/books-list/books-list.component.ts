import * as check from 'check-types';
import { Component, OnInit } from '@angular/core';
import { BookItem } from 'src/app/models/books';
import { BookCollectionService } from '../../services/book-collection.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {

 assetsUrl: string = "../../assets/img/";
 books: BookItem[]= [];
  constructor(private bookCollectionService: BookCollectionService,) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks(){   
      this.bookCollectionService.getBooks('book').subscribe(books =>{
        this.books = books;
        console.log(this.books);
      });
    }
}
