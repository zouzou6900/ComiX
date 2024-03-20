import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserFullProfilService {
  private apiUrl = 'http://localhost:3333/api/user/all/full';

  constructor(private http: HttpClient) {}

  getAllUsersFull(): Observable<any[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<any[]>(`${this.apiUrl}`, {
      headers,
    });
  }
}
