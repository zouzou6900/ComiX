import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Announces } from '../interfaces/announces';

@Injectable({
  providedIn: 'root'
})
export class AllAnnouncesService {

  private readonly apiUrl = 'http://localhost:3333/api/announces';

  constructor(private httpClient: HttpClient) {}

  getAllAnnounces() {
    const token = localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${token}`
    });

    return this.httpClient.get<Announces[]>(this.apiUrl, {
      headers
    });
  }
  
}