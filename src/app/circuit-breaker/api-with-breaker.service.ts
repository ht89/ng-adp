import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiWithBreakerService {
  private apis: Map<string, ApiStatus>;
  private failPercentage = 0.2;
  private timeWindow = 60 * 60 * 24;
  private timeToRetry = 60;

  constructor(private http: HttpClient) { }
}
