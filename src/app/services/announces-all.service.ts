import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { UserData } from "../pages/announces-all/announces-all.component";

@Injectable({
  providedIn: "root",
})
export class AnnouncesAllService {
  private readonly API_URL = 'http://localhost:3333/api/user/'; // Base URL

  constructor(private http: HttpClient) {}

  getAnnouncements(): Observable<UserData[]> {
    const userId = localStorage.getItem('userid');
    const url = `${this.API_URL}all/full`; // Construct correct URL

    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('Missing authentication token');
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<UserData[]>(url, { headers });
  }


  getAnnonceById(id: number): Observable<any> {
    const token = localStorage.getItem('token');

    if (!token) {
      throw new Error('Missing authentication token');
    }

    const headers = new HttpHeaders({
      Authorization: `Bearer ${token}`
    });

    return this.http.get<any>(`${this.API_URL}${id}/full`, { headers });
  }

  getAnnonce(id: number) {
    const token = localStorage.getItem('token');
const headers = new HttpHeaders({
  Authorization: `Bearer ${token}`
});
    return this.http.get(`http://localhost:3333/api/user/${id}/full`, { headers })
    .subscribe(response => {
      // Handle successful response
    }, error => {
      // Handle errors
    });
  }

}
