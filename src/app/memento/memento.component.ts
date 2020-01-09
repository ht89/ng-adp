import { Component, OnInit } from '@angular/core';
import { IMDBAPIService } from '../promises/imdb-api.service';
import { Memento } from './memento';
import { Originator } from './originator';

@Component({
  selector: 'app-memento',
  templateUrl: './memento.component.html',
  styleUrls: ['./memento.component.css']
})
export class MementoComponent implements OnInit {
  savedStates: Memento<string>[] = [];

  constructor(private api: IMDBAPIService) {}

  ngOnInit() {
    // Care taker

    const originator = new Originator<string>();
    originator.set('State 1');
    originator.set('State 2');

    this.savedStates.push(originator.saveToMemento());

    originator.set('State 3');

    this.savedStates.push(originator.saveToMemento());

    originator.set('State 4');

    originator.restoreFromMemento(this.savedStates[1]);
  }
}
