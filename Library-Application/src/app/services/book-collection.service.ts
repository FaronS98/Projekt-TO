import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {map} from 'rxjs/operators';
import {BookItem} from '../models/books';
import {IBookItemDTO} from '../models/books.interface';
import {catchError} from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class BookCollectionService {

  urlServer:string = 'http://localhost:3000';  

  /**
   * @constructor
   */
  constructor(private http: HttpClient) { }
 

  getBooks(name: string): Observable<BookItem[]> {
    const url = `${this.urlServer}/${name}`;
    
    return this.http
            .get<IBookItemDTO[]>(url)
            .pipe(
              map(response => response.map((item) => {
                return BookItem.factory(item) as BookItem
              }))
          );
  }

  saveBook(book: BookItem) {
    const url = `${this.urlServer}/book`;
    
    return this.http
            .post(url, {book: book})
            .pipe(catchError(response => 
               throwError(response.error)
            ));
  }
}


    