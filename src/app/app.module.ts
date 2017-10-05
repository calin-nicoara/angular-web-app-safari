import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from "@angular/forms";
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {BookDetailsComponent} from "./book/book-details.component";

@NgModule({
    declarations: [
        AppComponent,
        BookDetailsComponent
    ],
    imports: [
        BrowserModule, FormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
