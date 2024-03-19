import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListUser } from '../interfaces/list-user';

@Injectable({
  providedIn: 'root',
})
export class UserListService {
  private apiUrl = 'http://localhost:3333/api/user';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<ListUser[]> {
    return this.http.get<ListUser[]>(`${this.apiUrl}/all`);
  }
}
