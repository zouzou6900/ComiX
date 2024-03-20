import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { UserListService, } from '../../../../../services/user-list.service';
import { ListUser } from '../../../../../interfaces/list-user';
import { userProfileService } from '../../../../../services/user-profile.service';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { MyModalComponent } from './my-modal/my-modal.component';

@Component({
  selector: 'app-administrateur',
  standalone: true,
  imports: [MatFormFieldModule, MatInputModule, MatTableModule,MatDialogModule],
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

  constructor(private userListService: UserListService,private userProfil: userProfileService,private dialog: MatDialog) {}

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
  view(id:string) {
    console.log("La fonction a été view!");
    this.userProfil.getPersonalData().subscribe(
      (data: any) => {
        this.dataSource = data.users;
      },
      (error) => {
        console.error(
          'Erreur lors de la récupération de l utilisateurs:',
          error
        );
      }
    );
    this.openModal();
  }
  update(id:string) {
    console.log("La fonction a été update!");
  }
  
  openModal(): void {
    this.dialog.open(MyModalComponent, {
      width: '550px', // Définir la largeur du modal
      data: { name: 'John', age: 30 } // Passer des données au composant de modal
    });
  }
}
