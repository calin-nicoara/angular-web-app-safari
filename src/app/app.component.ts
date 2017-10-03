import {Component} from '@angular/core';
import {BOOKS} from "./book/mock-books";
import {Book} from "./book/book";

@Component({
    selector: 'books-list',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    booksList: Book[] = BOOKS;
    selectedBook: Book;

    getBookDetails(isbn: number) {
        var selectedBook = this.booksList.filter(book => book.isbn === isbn);
        this.selectedBook = selectedBook[0];
    }
}
