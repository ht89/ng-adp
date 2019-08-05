import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class AppService {
  private greeting = new BehaviorSubject<string>('Hello world');

  constructor() {}

  setGreeting(msg: string) {
    this.greeting.next(msg);
  }

  getGreeting(): Observable<string> {
    return this.greeting.asObservable();
  }
}
