import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { User } from "../interfaces/auth";
import { BehaviorSubject, Observable, map } from "rxjs";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private baseUrl = "http://localhost:3333";

  constructor(private http: HttpClient, private router: Router) {}

  private nicknameSubject = new BehaviorSubject<string | null>(null);
  nickname$ = this.nicknameSubject.asObservable();

  registerUser(userDetails: User) {
    return this.http.post(`${this.baseUrl}/auth/register`, userDetails);
  }

  loginUser(email: string, password: string): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/auth/login`, { email, password }).pipe(
      map((user) => {
        if (user) {
          sessionStorage.setItem("email", email);
          sessionStorage.setItem("nickname", user.nickname);
          this.nicknameSubject.next(user.nickname);
          return user;
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
    return !!sessionStorage.getItem("email");
  }
}
