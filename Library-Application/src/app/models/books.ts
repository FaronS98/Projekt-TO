import * as check from 'check-types';
import {IBookItemDTO} from './books.interface';

export class BookItem {

    bookName: string = null;
    authorName: string = null;
    authorSurname: string = null;
    photoName: string = null;
    type: string = null;


    /**
     * Append data from JSON object
     *
     * @param data
     * @return {BookItem}
     */
    fromJson(data): BookItem {
   
        if (check.assigned(data.bookName)) {
            this.bookName = data.bookName;
        }

        if (check.assigned(data.authorName)) {
            this.authorName = data.authorName;
        }

        if (check.assigned(data.authorSurname)) {
            this.authorSurname = data.authorSurname;
        }

        if (check.assigned(data.photoName)) {
            this.photoName = data.photoName;
        }

        if (check.assigned(data.type)) {
            this.type = data.type;
        }

        return this;
    }


    /**
     * Return JSON object ...
     *
     * @return {IBookItemDTO}
     */
    toJson() {
        const data: IBookItemDTO = null;

        data.bookName = this.bookName;
        data.authorName = this.authorName;
        data.authorSurname = this.authorSurname;
        data.photoName = this.photoName;        
        data.type = this.type;

        return data;
    }


    /**
     * Create BookItem object from data object
     *
     * @param {IBookItemDTO} data
     * @return {BookItem}
     */
    static factory(data: IBookItemDTO): BookItem {
        return (new BookItem()).fromJson(data);
    }
}
