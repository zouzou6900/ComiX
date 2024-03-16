import { Component, OnInit } from "@angular/core";
import { QuickSearchComponent } from "../../components/quick-search/quick-search.component";
import { AnnouncesService } from "../../services/announces.service";
import { User } from "../../interfaces/user-announces";
import { Router } from "@angular/router";

@Component({
  selector: "app-announces",
  standalone: true,
  imports: [QuickSearchComponent],
  templateUrl: "./announces.component.html",
  styleUrl: "./announces.component.scss",
})
export class AnnouncesComponent implements OnInit {
  users: User[] = [];

  constructor(private announcesService: AnnouncesService, private router: Router) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    // Appel du service pour récupérer les utilisateurs
    this.announcesService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  goToDetails(id: number): void {
    this.router.navigate(['/announce', id]);
  }
}