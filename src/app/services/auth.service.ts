import { Injectable } from "@angular/core";
import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { User } from "../interfaces/auth";
import { BehaviorSubject, Observable, catchError, map } from "rxjs";
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
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          throw new Error("Email ou mot de passe incorrect");
        } else {
          // Erreur serveur
          console.error(error);
          throw new Error("Une erreur est survenue. Veuillez réessayer ultérieurement.");
        }
      }),
      map((user) => {
        sessionStorage.setItem("email", user.email);
        sessionStorage.setItem("nickname", user.nickname);
        return user;
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

  getUserNickname(): string | null {
    const nicknameFromStorage = sessionStorage.getItem("nickname");
    if (nicknameFromStorage) {
      return nicknameFromStorage;
    }
    return null;
  }
}
