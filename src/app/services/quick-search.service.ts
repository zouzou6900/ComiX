import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { User } from '../interfaces/quick-search';

@Injectable({
  providedIn: 'root'
})
export class QuickSearchService {
  baseUrl = 'http://localhost:3000/user'; // Define base URL for user data

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl);
  }
}