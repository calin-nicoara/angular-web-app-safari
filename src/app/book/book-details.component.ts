import {Component, EventEmitter, Input, Output} from "@angular/core";
import {Book} from "./book";

@Component({
    selector: 'book-details',
    templateUrl: './book-details.component.html'
})
export class BookDetailsComponent {
    @Input('myBook') book: Book;

    @Output('deleteMyBook') onDelete = new EventEmitter<number>();

    deleteBook() {
        this.onDelete.emit(this.book.isbn);
    }
}