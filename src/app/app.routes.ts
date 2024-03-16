import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ContentComponent } from './pages/admin/content/content.component';
import { SettingsComponent } from './pages/admin/side-bar/dashboard/settings/settings.component';
import { StatusComponent } from './pages/admin/side-bar/dashboard/status/status.component';
import { EvenementsComponent } from './pages/admin/side-bar/dashboard/evenements/evenements.component';
import { SociauxComponent } from './pages/admin/side-bar/dashboard/sociaux/sociaux.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AnnouncesComponent } from './pages/announces/announces.component';
import { authGuard } from './guards/auth.guard';
import { adminGuard } from './guards/admin.guard';
import { AdministrateurComponent } from './pages/admin/side-bar/users/administrateur/administrateur.component';
import { UsersBanniComponent } from './pages/admin/side-bar/users/users-banni/users-banni.component';
import { RoleUsersComponent } from './pages/admin/side-bar/users/role-users/role-users.component';
import { ListUsersComponent } from './pages/admin/side-bar/users/list-users/list-users.component';
import { CheckAnnouncesComponent } from './pages/admin/side-bar/check-announces/check-announces.component';
import { LoginGuard } from './guards/login.guard';
import { AnnounceDetailsComponent } from './pages/announce-details/announce-details.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent, 
  // si user déjà connected, on l'envoie vers /home
  canActivate: [LoginGuard] },
  { path: 'register', component: RegisterComponent },
  {
    // redirige les requêtes de localhost:4200/ vers localhost:4200/home
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'home', component: HomeComponent },
  {
    path: 'announces',
    component: AnnouncesComponent,
    // si user connected, on affiche la page, sinon on le redirige vers la page de login
    canActivate: [authGuard],
  },
  { path: 'announce/:id', component: AnnounceDetailsComponent, canActivate: [authGuard], },
  
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [adminGuard],
    children: [
      { path: 'dashboard', component: ContentComponent },
      { path: 'settings', component: SettingsComponent },
      { path: 'status', component: StatusComponent },
      { path: 'evenements', component: EvenementsComponent },
      { path: 'sociaux', component: SociauxComponent },
      { path: 'listUsers', component: ListUsersComponent },
      { path: 'administrateur', component: AdministrateurComponent },
      { path: 'usersBan', component: UsersBanniComponent },
      { path: 'roleUsers', component: RoleUsersComponent },
      { path: 'checkAnnounces', component: CheckAnnouncesComponent },
    ],
  },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
