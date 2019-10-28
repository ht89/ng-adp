import { Component, OnInit } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'app-loop-count',
  templateUrl: './loop-count.component.html',
  styleUrls: ['./loop-count.component.css']
})
export class LoopCountComponent implements OnInit {
  books: Book[] = [];

  constructor() {}

  ngOnInit() {
    for (let i = 0; i < 10; i++) {
      this.books.push(new Book(i, this.makeId()));
    }
  }

  refresh() {
    const id = Math.floor(Math.random() * this.books.length);
    this.books[id].title = this.makeId();
    console.log(id, 'refreshed');
  }

  private makeId() {
    let text = '';
    const possible = 'ABCDEFGHIJKLMNOPQRSTUVWYZ0123456789';

    for (let i = 0; i < 15; i++) {
      const randChar = Math.floor(Math.random() * possible.length);
      text += possible.charAt(randChar);
    }

    return text;
  }

  trackByFn(index, item) {
    return item.id;
  }
}
