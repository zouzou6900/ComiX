import { Component } from '@angular/core';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { HeaderComponent } from '../../header.component';

@Component({
  selector: 'app-header-utils',
  standalone: true,
  imports: [RouterOutlet,RouterLink,HeaderComponent],
  templateUrl: './header-utils.component.html',
  styleUrl: './header-utils.component.scss'
})
export class HeaderUtilsComponent {
  constructor(private router: Router) {}
  isRouteAdmin(): boolean {
    return this.router.url === '/admin';
  }

}
