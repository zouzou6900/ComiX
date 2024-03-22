import { Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { AboutComponent } from "./pages/about/about.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { AdminComponent } from "./pages/admin/admin.component";
import { ContentComponent } from "./pages/admin/content/content.component";
import { SettingsComponent } from "./pages/admin/side-bar/dashboard/settings/settings.component";
import { StatusComponent } from "./pages/admin/side-bar/dashboard/status/status.component";
import { EvenementsComponent } from "./pages/admin/side-bar/dashboard/evenements/evenements.component";
import { SociauxComponent } from "./pages/admin/side-bar/dashboard/sociaux/sociaux.component";
import { LoginComponent } from "./components/login/login.component";
import { RegisterComponent } from "./components/register/register.component";
import { authGuard } from "./guards/auth.guard";
import { adminGuard } from "./guards/admin.guard";
import { AdministrateurComponent } from "./pages/admin/side-bar/users/administrateur/administrateur.component";
import { UsersBanniComponent } from "./pages/admin/side-bar/users/users-banni/users-banni.component";
import { RoleUsersComponent } from "./pages/admin/side-bar/users/role-users/role-users.component";
import { ListUsersComponent } from "./pages/admin/side-bar/users/list-users/list-users.component";
import { CheckAnnouncesComponent } from "./pages/admin/side-bar/check-announces/check-announces.component";
import { LoginGuard } from "./guards/login.guard";
import { MyAccountComponent } from "./pages/my-account/my-account.component";
import { AllAnnouncesComponent } from "./pages/all-announces/all-announces.component";
import { MyPersonalDataComponent } from "./components/myaccount/my-personal-data/my-personal-data.component";
import { MyAdComponent } from "./components/myaccount/my-ad/my-ad.component";
import { MyAdvertiserProfilComponent } from "./components/myaccount/my-advertiser-profil/my-advertiser-profil.component";
import { ThankComponent } from "./pages/thank/thank.component";
import { AnnouncesComponent } from "./pages/announces/announces.component";
import { AnnouncesAllComponent } from "./pages/announces-all/announces-all.component";
import { AnnonceComponent } from "./pages/annonce/annonce.component";
import { UploadFilesComponent } from "./components/upload-multiple/upload-multiple.component";

export const routes: Routes = [
  {
    path: "login",
    component: LoginComponent,
    // si user déjà connected, on l'envoie vers /home
    canActivate: [LoginGuard],
  },
  { path: "register", component: RegisterComponent },
  {
    // redirige les requêtes de localhost:4200/ vers localhost:4200/home
    path: "",
    redirectTo: "home",
    pathMatch: "full",
  },
  {
    path: "myaccount",
    component: MyAccountComponent,
    canActivate: [authGuard],
    children: [
      
      {
        path: "personal-data",
        component: MyPersonalDataComponent,
        canActivate: [authGuard],
      },
      {
        path: "advertiser-profile",
        component: MyAdvertiserProfilComponent,
        canActivate: [authGuard],
      },
      {
        path: "my-announce",
        component: MyAdComponent,
        canActivate: [authGuard],
      },
      {
        path: "my-gallery",
        component: UploadFilesComponent,
        canActivate: [authGuard],
      },
    ],
  },

  { path: "home", component: HomeComponent },
  { path: "myaccount", component: MyAccountComponent },

  {
    path: "all-announces",
    component: AnnouncesAllComponent,
    canActivate: [authGuard],
  },
  
  { path: 'annonce/:id', component: AnnonceComponent, canActivate: [ authGuard] },

  { path: "about", component: AboutComponent },
  { path: "contact", component: ContactComponent },
  { path: "thank", component: ThankComponent },
  {
    path: "admin",
    component: AdminComponent,
    canActivate: [adminGuard],
    children: [
      { path: "dashboard", component: ContentComponent },
      { path: "settings", component: SettingsComponent },
      { path: "status", component: StatusComponent },
      { path: "evenements", component: EvenementsComponent },
      { path: "sociaux", component: SociauxComponent },
      { path: "listUsers", component: ListUsersComponent },
      { path: "administrateur", component: AdministrateurComponent },
      { path: "usersBan", component: UsersBanniComponent },
      { path: "roleUsers", component: RoleUsersComponent },
      { path: "checkAnnounces", component: CheckAnnouncesComponent },
    ],
  },
  { path: "**", redirectTo: "home", pathMatch: "full" },
];
