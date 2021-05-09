import { Component, OnInit } from '@angular/core';
import { BookItem } from 'src/app/models/books';
import { BookCollectionService } from '../../services/book-collection.service';

@Component({
  selector: 'app-manage-library',
  templateUrl: './manage-library.component.html',
  styleUrls: ['./manage-library.component.scss']
})
export class ManageLibraryComponent implements OnInit {

  book: BookItem = BookItem.factory({bookName:null,authorName:null,authorSurname:null,photoName:null,type:null});
  constructor(private bookCollectionService: BookCollectionService,) { }

  ngOnInit(): void {
  }

  saveBook(){
    if(this.book.bookName == null || this.book.authorName == null || this.book.authorSurname == null || this.book.type == null || this.book.photoName == null 
      ){
        console.log(this.book)
        alert("Wypelnij wszystkie pola formularza")
        
    }else{
        this.bookCollectionService.saveBook(this.book).subscribe(response => {
          console.log(response)
        });
        alert("Wysłano");
        window.location.reload(true);
    }   
  }  
}
