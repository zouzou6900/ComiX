import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`,
    });
    return this.http.get<ListUser[]>(`${this.apiUrl}/all`, {
      headers,
    });
  }
  getOneUser(url:string, headers:any): Observable<any>{
    return this.http.get<any>(url, {
      headers, 
    });
  }
  updateUser(url: string, headers: any, body: any): Observable<any> {
    return this.http.patch(url, body, { headers });
  }
  deleteUser(url: string, headers: { Authorization: string; }):Observable<any> {
    return this.http.delete(url,{headers});
  }
}
