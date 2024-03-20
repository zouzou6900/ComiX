import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ContentComponent } from '../content/content.component';
import { Router } from '@angular/router';
import { SettingsComponent } from '../side-bar/dashboard/settings/settings.component';
import { StatusComponent } from '../side-bar/dashboard/status/status.component';
import { EvenementsComponent } from '../side-bar/dashboard/evenements/evenements.component';
import { SociauxComponent } from '../side-bar/dashboard/sociaux/sociaux.component';
import { AdministrateurComponent } from '../side-bar/users/administrateur/administrateur.component';
import { UsersBanniComponent } from '../side-bar/users/users-banni/users-banni.component';
import { RoleUsersComponent } from '../side-bar/users/role-users/role-users.component';
import { ListUsersComponent } from '../side-bar/users/list-users/list-users.component';
import { CheckAnnouncesComponent } from '../side-bar/check-announces/check-announces.component';
import { HeaderComponent } from '../../../components/header/header.component';

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
    ListUsersComponent,
    AdministrateurComponent,
    UsersBanniComponent,
    RoleUsersComponent,
    CheckAnnouncesComponent,
    HeaderComponent,
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
  isRouteUsers(): boolean {
    return this.router.url === '/admin/listUsers';
  }
  isRouteAdministrateur(): boolean {
    return this.router.url === '/admin/administrateur';
  }
  isRouteUsersBan(): boolean {
    return this.router.url === '/admin/usersBan';
  }
  isRouteRoleUsers(): boolean {
    return this.router.url === '/admin/roleUsers';
  }
  isRouteCheckannounces(): boolean {
    return this.router.url === '/admin/checkAnnounces';
  }
}
