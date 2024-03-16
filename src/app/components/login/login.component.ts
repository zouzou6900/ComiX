import { HttpClientModule } from "@angular/common/http";
import { Component } from "@angular/core";
import { ReactiveFormsModule, Validators, FormBuilder, FormsModule } from "@angular/forms";
import { Router, RouterLink } from "@angular/router";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-login",
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink, HttpClientModule, FormsModule],
  templateUrl: "./login.component.html",
  styleUrl: "./login.component.scss",
})
export class LoginComponent {
  loginForm = this.fb.group({
    email: ["", [Validators.required, Validators.email]],
    password: ["", Validators.required],
  });

  errorMessage: string | null = null;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {console.log("Utilisateur connecté : ", this.authService.isLoggedIn());}

  
  get email() {
    return this.loginForm.controls["email"];
  }

  get password() {
    return this.loginForm.controls["password"];
  }

  loginUser() {
    const email = this.loginForm.value.email!;
    const password = this.loginForm.value.password!;
    this.authService.loginUser(email, password).subscribe(() => {
      window.location.reload();
      setTimeout(() => {
        this.router.navigate(['/home']);
      }, 1000); // Délai de 1 seconde
    },
      (error) => {
        window.alert(error); // Affiche l'erreur en cas d'échec de connexion
      }
    );
  }
}
