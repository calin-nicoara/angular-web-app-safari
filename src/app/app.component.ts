import {Component, OnInit} from '@angular/core';
import {BOOKS} from "./book/mock-books";
import {Book} from "./book/book";
import {BookStoreService} from "./book/book-store.service";
import {ConsoleLoggerService} from "./console/console-logger.service";

@Component({
  selector: 'app-main',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ConsoleLoggerService, BookStoreService]
})
export class AppComponent implements OnInit {
  filteredBooks: Book[];
  booksList: Book[] = BOOKS;
  selectedBook: Book;

  constructor(private bookStoreService: BookStoreService) {
  }

  ngOnInit() {
    this.getBooksList();
  }

  getBooksList() {
    this.booksList = this.bookStoreService.getBooks();
  }

  getBookDetails(isbn: number) {
    this.selectedBook = this.bookStoreService.getBook(isbn);
  }

  deleteBook(isbn: number) {
    this.selectedBook = null;
    this.booksList = this.bookStoreService.deleteBook(isbn);
  }

  searchBook(title: string) {
    this.bookStoreService
      .getBooksByTitle(title)
      .subscribe(books => {
        console.log('Fuck this shit:', books);
        this.filteredBooks = books;
      });
  }
}
