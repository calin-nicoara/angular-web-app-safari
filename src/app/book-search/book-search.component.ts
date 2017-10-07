import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/fromEvent";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import "rxjs/add/operator/switchMap";

import {BookStoreService} from "../book/book-store.service";
import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-book-search',
  templateUrl: './book-search.component.html',
  styleUrls: ['./book-search.component.scss']
})
export class BookSearchComponent implements OnInit {

  @ViewChild('searchInput') searchInput;
  @ViewChild('suggestions') suggestions;

  bookTitles: Array<string> = [];
  searchInputTerm: string = '';

  @Output() search = new EventEmitter<string>();

  constructor(private bookStoreService: BookStoreService) {
  }

  ngOnInit() {
    this.createObservableForTitleSuggestions();
    this.createObservableForAutoCompletingField();
  }

  private createObservableForTitleSuggestions() {
    Observable.fromEvent(this.searchInput.nativeElement, 'keyup')
      .debounceTime(400)
      .distinctUntilChanged()
      .map((event: KeyboardEvent) => (<HTMLInputElement>event.target).value)
      .switchMap(title => this.bookStoreService.getBooksTitles(title))
      .subscribe(titles => this.bookTitles = titles);
  }

  private createObservableForAutoCompletingField() {
    Observable.fromEvent(this.suggestions.nativeElement, 'click')
      .map((event: KeyboardEvent) => (<HTMLInputElement>event.srcElement).innerText)
      .subscribe(res => {
        this.searchInputTerm = res;
        this.bookTitles = [];
      });
  }

  searchBooks() {
    this.bookTitles = [];
    this.search.emit(this.searchInputTerm)
  }
}
