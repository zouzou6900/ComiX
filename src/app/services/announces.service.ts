import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../interfaces/user-announces';
import { UserAnnounce } from '../interfaces/announce-details';

@Injectable({
  providedIn: 'root',
})
export class AnnouncesService {
  log(user: any) {
    throw new Error('Method not implemented.');
  }

  base_url = 'http://localhost:3333/api/user';
  constructor(private httpClient: HttpClient) {}
  getUser(userId: number): Observable<User> {
    return this.httpClient.get<User>(`${this.base_url}/${userId}`);
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(`${this.base_url}/all`);
  }

  getCombinedUserData(id: number): Observable<UserAnnounce> {
    return this.httpClient.get<UserAnnounce>(`${this.base_url}/${id}`);
  }
}
