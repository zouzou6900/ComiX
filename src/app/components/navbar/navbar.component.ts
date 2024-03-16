import { Component } from "@angular/core";
import { Router, RouterLink } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { AuthService } from "../../services/auth.service";

@Component({
  selector: "app-navbar",
  standalone: true,
  imports: [RouterLink],
  templateUrl: "./navbar.component.html",
  styleUrl: "./navbar.component.scss",
})
export class NavbarComponent {
  nickname: string | null = null;

  constructor(
    private router: Router,
    private modalService: NgbModal,
    private authService: AuthService
  ) {}

  ngOnInit() {
    //this.nickname = sessionStorage.getItem("nickname"); (ne refresh pas la page après la connexion ;( !)
    this.nickname = this.authService.getUserNickname();
  }
  logOut() {
    sessionStorage.clear();
  }
  logIn() {
    this.router.navigate(["/login"]);
  }
  openModal(content: any) {
    this.modalService.open(content, { centered: true }).result.then(
      (result) => {
        if (result === "logout") {
          this.logOut();
          this.router.navigate(["/home"]);
          window.location.reload();
        }
        if (result === "login") {
          this.logIn();
          this.router.navigate(["/login"]);
          window.location.reload();
        }
      },
      (reason) => {}
    );
  }

  isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }
}
