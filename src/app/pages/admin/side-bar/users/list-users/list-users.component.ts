import { Component, OnInit } from '@angular/core';
import { UserListService } from '../../../../../services/user-list.service';
import { ListUser } from '../../../../../interfaces/list-user';

@Component({
  selector: 'app-list-users',
  standalone: true,
  imports: [],
  templateUrl: './list-users.component.html',
  styleUrl: './list-users.component.scss',
})
export class ListUsersComponent implements OnInit {
  users: ListUser[] = [];

  constructor(private userListService: UserListService) {}

  ngOnInit(): void {
    this.userListService.getAllUsers().subscribe(
      (data: any) => {
        this.users = data.users;
      },
      (error) => {
        console.error(
          'Erreur lors de la récupération des utilisateurs:',
          error
        );
      }
    );
  }
}
