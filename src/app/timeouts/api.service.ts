import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  get(): Observable<any> {
    let res;

    setTimeout(() => (res = 'data'), 3000);

    return of(res);
  }
}
