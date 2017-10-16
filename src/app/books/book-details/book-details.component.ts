import {Component, OnInit} from '@angular/core';

import {ActivatedRoute, Params, Router} from "@angular/router";
import { Location } from '@angular/common';

import { Book } from '../book';
import {BookStoreService} from "../book-store.service";

import "rxjs/add/operator/switchMap";

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit{
  book: Book;

  constructor(private bookStoreService: BookStoreService,
              private location: Location,
              private route: ActivatedRoute,
              private router: Router) {}

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.bookStoreService.getBook(+params['id']))
      .subscribe(book => this.book = book);
  }

  deleteBook() {
    this.bookStoreService.deleteBook(this.book.id)
      .subscribe(() => this.router.navigate(['/books']));
  }
}
