import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ContentComponent } from '../content/content.component';
import { Router } from '@angular/router';
import { SettingsComponent } from '../side-bar/dashboard/settings/settings.component';
import { StatusComponent } from '../side-bar/dashboard/status/status.component';
import { EvenementsComponent } from '../side-bar/dashboard/evenements/evenements.component';
import { SociauxComponent } from '../side-bar/dashboard/sociaux/sociaux.component';

@Component({
  selector: 'app-contenaire',
  standalone: true,
  imports: [
    CommonModule,
    ContentComponent,
    SettingsComponent,
    StatusComponent,
    EvenementsComponent,
    SociauxComponent,
  ],
  templateUrl: './contenaire.component.html',
  styleUrl: './contenaire.component.scss',
})
export class ContenaireComponent {
  dateActuelle: Date = new Date();

  constructor(private router: Router) {}

  getLastSegment(): string {
    const url = this.router.url;
    const segments = url.split('/');
    return segments[segments.length - 1];
  }

  ngOnInit() {
    this.startTimer();
  }

  startTimer() {
    interval(1000).subscribe(() => {
      this.dateActuelle = new Date();
    });
  }
  capitalizeFirstLetter(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }

  isRouteDashboard(): boolean {
    return this.router.url === '/admin/dashboard';
  }
  isRouteStatus(): boolean {
    return this.router.url === '/admin/status';
  }
  isRouteSettings(): boolean {
    return this.router.url === '/admin/settings';
  }
  isRouteEvenements(): boolean {
    return this.router.url === '/admin/evenements';
  }
  isRouteSociaux(): boolean {
    return this.router.url === '/admin/sociaux';
  }
}
