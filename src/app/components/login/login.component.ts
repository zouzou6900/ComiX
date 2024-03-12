import { HttpClientModule } from "@angular/common/http";
import { Component } from "@angular/core";
import { ReactiveFormsModule, Validators, FormBuilder } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, HttpClientModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  get email() {
    return this.loginForm.controls["email"];
  }

  get password() {
    return this.loginForm.controls["password"];
  }

  loginUser() {
    const email = this.loginForm.value.email!;
    const password = this.loginForm.value.password!;
    this.authService.loginUser(email, password).subscribe(
      () => {
        // Connexion réussie, redirection vers la page d'accueil
        this.router.navigate(["/home"]);
      },
      (error) => {
        window.alert(error); // Affiche l'erreur en cas d'échec de connexion
      }
    );
  }
}
