import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BookDetailsComponent} from "./book/book-details.component";
import { ObservableExampleComponent } from './observable-example/observable-example.component';
import { BookSearchComponent } from './book-search/book-search.component';
import { BookListComponent } from './book-list/book-list.component';

@NgModule({
    declarations: [
        AppComponent,
        BookDetailsComponent,
        ObservableExampleComponent,
        BookSearchComponent,
        BookListComponent
    ],
    imports: [
        BrowserModule, FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
