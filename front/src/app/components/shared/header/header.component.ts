import { Component } from "@angular/core";
import { Router, RouterLink, RouterModule } from "@angular/router";
import { HeaderTopComponent } from "./header-top/header-top.component";
import { HeaderBottomComponent } from "./header-bottom/header-bottom.component";

@Component({
  selector: "app-header",
  standalone: true,
  imports: [
    RouterLink,
    RouterModule,
    HeaderTopComponent,
    HeaderBottomComponent,
  ],
  templateUrl: "./header.component.html",
  styleUrl: "./header.component.scss",
})
export class HeaderComponent {
  constructor(private router: Router) {}
}
