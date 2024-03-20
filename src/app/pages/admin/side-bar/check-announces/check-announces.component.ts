import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-check-announces',
  standalone: true,
  imports: [],
  templateUrl: './check-announces.component.html',
  styleUrl: './check-announces.component.scss'
})
export class CheckAnnouncesComponent {
dataSource: any;
private readonly apiUrl = 'http://localhost:3333/api/announces';

constructor(private httpClient: HttpClient) {}

getAllAnnounces() {
  const token = localStorage.getItem('token');
  const headers = new HttpHeaders({
    'Authorization': `Bearer ${token}`
  });

  return this.httpClient.get(this.apiUrl, {
    headers
  });
}
}
