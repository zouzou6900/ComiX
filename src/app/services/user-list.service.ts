import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListUser } from '../interfaces/list-user';
import { ActivatedRoute } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class UserListService {
  private apiUrl = 'http://localhost:3333/api/user';
  route: any;
   
  constructor(private http: HttpClient,private ActivatedRoute:ActivatedRoute) {}

  getAllUsers(): Observable<ListUser[]> {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<ListUser[]>(`${this.apiUrl}/all`, {
      headers,
    });
  }
  getOneUser(){
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('token');
    const ids = this.route.snapshot.params['id'];
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    console.log('ici je viens de service getOneUser',id);
    return this.http.get<ListUser[]>(`${this.apiUrl}/${id}`, {
      headers,
    });
  }
}
