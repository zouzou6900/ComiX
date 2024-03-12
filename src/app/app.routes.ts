import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ContentComponent } from './pages/admin/content/content.component';
import { adminGuard } from './admin.guard';
import { SettingsComponent } from './pages/admin/side-bar/dashboard/settings/settings.component';
import { StatusComponent } from './pages/admin/side-bar/dashboard/status/status.component';
import { EvenementsComponent } from './pages/admin/side-bar/dashboard/evenements/evenements.component';
import { SociauxComponent } from './pages/admin/side-bar/dashboard/sociaux/sociaux.component';

export const routes: Routes = [
  {
    // redirige les requêtes de localhost:4200/ vers localhost:4200/home
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'home', component: HomeComponent },
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
    ],
  },
];
