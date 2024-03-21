import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
interface UserData {
  id: number;
  firstname: string;
  lastname: string;
}
@Injectable({
  providedIn: 'root'
})
export class AllAnnouncesService {
users:any[]=[]
constructor(private http: HttpClient) {}

getUsers(token: string): Observable<UserData[]> {
  const url = 'http://localhost:3333/api/user/all/full'; // Replace with your actual URL
  const headers = new HttpHeaders({ 'Authorization': `Bearer ${token}` });

  return this.http.get<UserData[]>(url, {
    headers
  });
}
}