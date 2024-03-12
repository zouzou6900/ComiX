import { Component } from "@angular/core";
import { ReactiveFormsModule, Validators, FormBuilder } from "@angular/forms";
import { RouterLink } from "@angular/router";
import { passwordMatchValidator } from "../../validators/password-match.directive";
import { AuthService } from "../../services/auth.service";
import { User } from "../../interfaces/auth";

@Component({
  selector: "app-register",
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: "./register.component.html",
  styleUrl: "./register.component.scss",
})
export class RegisterComponent {
  registerForm = this.fb.group(
    {
      nickname: ["", [Validators.required, Validators.pattern("^[a-zA-Z]+$")]],
      email: ["", [Validators.required, Validators.email]],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required],
    },
    {
      validators: passwordMatchValidator,
    }
  );

  constructor(private fb: FormBuilder, private authService: AuthService) {}

  get nickname() {
    return this.registerForm.controls["nickname"];
  }
  get email() {
    return this.registerForm.controls["email"];
  }
  get password() {
    return this.registerForm.controls["password"];
  }
  get confirmPassword() {
    return this.registerForm.controls["confirmPassword"];
  }

  submitDetails() {
    console.log(this.registerForm.value);
    const postData = { ...this.registerForm.value };
    delete postData.confirmPassword;
    this.authService.registerUser(postData as User).subscribe(
      (response) => {
        window.alert("Compte créé avec succès !");
        window.location.href = "/login";
      },
      (error) => {
        console.error(error);
        window.alert("Une erreur est survenue lors de la création du compte.");
      }
    );
  }
}
