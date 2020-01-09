import { Component, OnInit } from '@angular/core';
import { Movie } from '../promises/movie';
import { IMDBAPIService } from '../promises/imdb-api.service';

@Component({
  selector: 'app-memento',
  templateUrl: './memento.component.html',
  styleUrls: ['./memento.component.css']
})
export class MementoComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private api: IMDBAPIService) {}

  async ngOnInit() {
    this.movies = await this.api.fetchAll();
  }
}
