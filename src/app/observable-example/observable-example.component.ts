import {Component, OnInit, ViewChild} from '@angular/core';
import {Observable} from "rxjs/Observable";
import "rxjs/add/observable/fromEvent";
import "rxjs/add/observable/merge";
import "rxjs/add/operator/map";
import "rxjs/add/observable/interval";

@Component({
    selector: 'app-observable-example',
    template: `
      <div class="container">
        <h1>Observable example</h1>
        <input #text class="form-control-mt-1">
        <button #btn class="btn primary mt-1">Show Message!</button>
        <p class="mt-1">{{message}}</p>
        
        <p class="mt-1">{{timer$ | async | date: 'mediumTime'}}</p>
      </div>
    `,
    styleUrls: ['./observable-example.component.scss']
})
export class ObservableExampleComponent implements OnInit {
    @ViewChild('btn') btn;
    @ViewChild('text') text;
    message: string;

    timer$ = Observable.interval(1000)
        .map(event => new Date())

    ngOnInit() {
        this.messageShower();
    }

    private messageShower() {
        const btnOb$ = Observable
            .fromEvent(this.btn.nativeElement, 'click')
            .map(event => 'Hello Angular, RxJS!');

        const textOb$ = Observable
            .fromEvent(this.text.nativeElement, 'change')
            .map((event: Event) => (<HTMLInputElement>event.target).value);

        Observable.merge(btnOb$, textOb$).subscribe(res => this.message = res);
    }
}
