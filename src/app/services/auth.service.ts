import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../interfaces/auth";
import { BehaviorSubject, Observable, map } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private baseUrl = "http://localhost:3000";

  constructor(private http: HttpClient, private router: Router) {}

  private nicknameSubject = new BehaviorSubject<string | null>(null);
  nickname$ = this.nicknameSubject.asObservable();

  registerUser(userDetails: User) {
    return this.http.post(`${this.baseUrl}/users`, userDetails);
  }

  loginUser(email: string, password: string): Observable<User> {
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`).pipe(
      map((users) => {
        if (users.length > 0 && users[0].password === password) {
          sessionStorage.setItem("email", email);
          sessionStorage.setItem("nickname", users[0].nickname);
          this.nicknameSubject.next(users[0].nickname);
          return users[0];
        } else {
          throw new Error("Invalid credentials");
        }
      })
    );
  }

  getUserByEmail(email: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.baseUrl}/users?email=${email}`);
  }

  isLoggedIn(): boolean {
    // Vérifie si l'email de l'utilisateur est présent dans le sessionStorage
    return !!sessionStorage.getItem("email");
  }
}
