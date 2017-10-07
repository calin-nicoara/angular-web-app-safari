import {Injectable} from '@angular/core';
import {Book} from "./book";
import {BOOKS} from "./mock-books";
import {ConsoleLoggerService} from "../console/console-logger.service";
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/of";

@Injectable()
export class BookStoreService {

    booksList: Book[] = BOOKS;

    constructor(private loggerService: ConsoleLoggerService) {}

    getBooks() {
        return this.booksList;
    }

    getBooksByTitle(title: string): Observable<Book[]> {
        return Observable.of(this.filterBooks(title))
    }

    getBooksTitles(title: string): Observable<string[]> {
        return Observable.of(this.filterBooks(title).map(book => book.title));
    }

    filterBooks(title: string): Book[] {
        return title ? this.booksList
            .filter(book => new RegExp(title, 'gi').test(book.title)) : [];
    }

    getBook(isbn: number) {
        this.loggerService.log('Fetching book information');
        let selectedBook = this.booksList.filter(book => book.isbn === isbn);
        return selectedBook[0];
    }

    deleteBook(isbn: number) {
        this.booksList = this.booksList.filter(book => book.isbn !== isbn);
        return this.booksList;
    }

}
