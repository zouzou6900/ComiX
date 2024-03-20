import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpEvent, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileUploadService {
  private baseUrl = 'http://localhost:3333';

  constructor(private http: HttpClient) { }

  upload(file: File): Observable<HttpEvent<any>> {
    const formData = new FormData();
    formData.append('file', file);
  
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userid');
  
    if (!token) {
      throw new Error('Missing authentication token');
    }
  
    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });
  
    const req = new HttpRequest('POST', `${this.baseUrl}/upload`, formData, {
      reportProgress: true,
      responseType: 'json',
      headers,
    });
  
    return this.http.request(req);
  }
  

  getFiles(): Observable<any> {
    return this.http.get(`${this.baseUrl}/files`);
  }
}