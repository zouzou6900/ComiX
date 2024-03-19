import { Component } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

export interface PeriodicElement {
  name: string;
  id: number;
  email: string;
  role: string;
  naissance: Date;
  register: Date;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
    id: 1,
    name: 'zouzou',
    email: '',
    role: 'H',
    naissance: new Date('1990-04-29'),
    register: new Date('1990-04-28'),
  },
  {
    id: 2,
    name: 'Helium',
    email: '',
    role: 'He',
    naissance: new Date('1990-04-29'),
    register: new Date('1990-04-28'),
  },
  {
    id: 3,
    name: 'Lithium',
    email: '6.941',
    role: 'Li',
    naissance: new Date('1990-04-29'),
    register: new Date('1990-04-28'),
  },
  {
    id: 4,
    name: 'Beryllium',
    email: '9.0122',
    role: 'Be',
    naissance: new Date('1990-04-29'),
    register: new Date('1990-04-28'),
  },
  {
    id: 5,
    name: 'Boron',
    email: '10.811',
    role: 'B',
    naissance: new Date('1990-04-29'),
    register: new Date('1990-04-28'),
  },
  {
    id: 6,
    name: 'Carbon',
    email: '12.0107',
    role: 'C',
    naissance: new Date('1990-04-29'),
    register: new Date('1990-04-28'),
  },
  {
    id: 7,
    name: 'Nitrogen',
    email: '14.0067',
    role: 'N',
    naissance: new Date('1990-04-29'),
    register: new Date('1990-04-28'),
  },
  {
    id: 9,
    name: 'Fluorine',
    email: '18.9984',
    role: 'F',
    naissance: new Date('1990-04-29'),
    register: new Date('1990-04-28'),
  },
  {
    id: 10,
    name: 'Neon',
    email: '20.1797',
    role: 'Ne',
    naissance: new Date('1990-04-29'),
    register: new Date('1990-04-28'),
  },
];
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
  ];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
