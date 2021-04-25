import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import {BookItem} from '../models/books';
import {IBookItemDTO} from '../models/books.interface';

@Injectable({
  providedIn: 'root'
})
export class TailorCollectionService {

  urlServer:string = 'http://localhost:3000';  

  /**
   * @constructor
   */
  constructor(private http: HttpClient) { }
 

  getCollection(name: string): Observable<BookItem[]> {
    const url = `${this.urlServer}/${name}`;
    
    return this.http
            .get<IBookItemDTO[]>(url)
            .pipe(
              map(response => response.map((item) => {
                return BookItem.factory(item) as BookItem
              }))
          );
  }
}


    