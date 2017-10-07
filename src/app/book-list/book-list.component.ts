import {Component, Input} from '@angular/core';
import {Book} from "../book/book";

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.scss']
})
export class BookListComponent {
  @Input() books: Book[] = [];
}
