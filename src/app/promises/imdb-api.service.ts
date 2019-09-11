import { Injectable } from '@angular/core';
import { Movie, MovieFields } from './movie';
import { HttpClient } from '@angular/common/http';
import { flatMap, filter } from 'rxjs/operators';

@Injectable()
export class IMDBAPIService {
  constructor(private http: HttpClient) {}

  fetchOneById(id: number): Promise<Movie> {
    console.log('fetchOneById', id);

    return (
      this.http
        .get('../../assets/movies.json')
        .pipe(
          /**
           * Transforms the result of the http get, which is observable
           * into one observable by item.
           */
          flatMap((res: any) => res.movies),
          /**
           * Filters movies by their movie_id
           */
          filter((movie: any) => {
            console.log('filter', movie);
            return movie.movie_id === id;
          })
        )
        .toPromise()
        /**
         * Map the json movie item to the Movie model
         */
        .then((movie: any) => {
          console.log('map', movie);
          return new Movie(
            movie.movie_id,
            movie.title,
            movie.phase,
            movie.category_name,
            movie.release_year,
            movie.running_time,
            movie.rating_name,
            movie.disc_format_name,
            movie.number_discs,
            movie.viewing_format_name,
            movie.aspect_ratio_name,
            movie.status,
            movie.release_date,
            movie.budget,
            movie.gross,
            movie.time_stamp
          );
        })
    );
  }
}
