import { Component, OnInit } from '@angular/core';
import { IMDBAPIService } from './imdb-api.service';

@Component({
  selector: 'app-promises',
  templateUrl: './promises.component.html',
  styleUrls: ['./promises.component.css'],
  providers: [IMDBAPIService]
})
export class PromisesComponent implements OnInit {
  constructor(private imdbApi: IMDBAPIService) {}

  ngOnInit() {
    this.imdbApi.fetchOneById(1).then(res => console.log(res));
  }
}
