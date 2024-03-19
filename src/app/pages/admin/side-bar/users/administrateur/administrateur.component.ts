import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserListService } from '../../../../../services/user-list.service';
import { ListUser } from '../../../../../interfaces/list-user';

// export interface PeriodicElement {
//   name: string;
//   id: number;
//   email: string;
//   role: string;
//   naissance: Date;
//   register: Date;
// }

// const ELEMENT_DATA: PeriodicElement[] = [
//   {
//     id: 1,
//     name: 'zouzou',
//     email: '',
//     role: 'H',
//     naissance: new Date('1990-04-29'),
//     register: new Date('1990-04-28'),
//   },
//   {
//     id: 2,
//     name: 'Helium',
//     email: '',
//     role: 'He',
//     naissance: new Date('1990-04-29'),
//     register: new Date('1990-04-28'),
//   },
//   {
//     id: 3,
//     name: 'Lithium',
//     email: '6.941',
//     role: 'Li',
//     naissance: new Date('1990-04-29'),
//     register: new Date('1990-04-28'),
//   },
// ];
@Component({
  selector: 'app-administrateur',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule],
  templateUrl: './administrateur.component.html',
  styleUrl: './administrateur.component.scss',
})
export class AdministrateurComponent {
  displayedColumns: string[] = [
    'id',
    'name',
    'email',
    'role',
    'naissance',
    'register',
    'action'
  ];
  

  dataSource: ListUser[] = [];
  dataSources: any;

  constructor(private userListService: UserListService) {}

  ngOnInit(): void {
    this.userListService.getAllUsers().subscribe(
      (data: any) => {
        this.dataSource = data.users;
      },
      (error) => {
        console.error(
          'Erreur lors de la récupération des utilisateurs:',
          error
        );
      }
    );
     let dataSources = new MatTableDataSource(this.dataSource);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSources.filter = filterValue.trim().toLowerCase();
  }

  
}
