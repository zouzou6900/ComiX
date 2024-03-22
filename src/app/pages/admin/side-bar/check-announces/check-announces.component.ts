import { Component, OnInit } from '@angular/core';

import { Announces } from '../../../../interfaces/announces';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CheckAnnouncesService } from '../../../../services/check-announces.service';

@Component({
  selector: 'app-check-announces',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    MatTableModule,],
  templateUrl: './check-announces.component.html',
  styleUrl: './check-announces.component.scss'
})
export class CheckAnnouncesComponent implements OnInit {
applyFilter($event: KeyboardEvent) {
throw new Error('Method not implemented.');
}
  displayedColumns: string[] = [
    'id',
    'title',
    'description',
    'action',
  ];
  dataSource: MatTableDataSource<Announces> ;
  announces: any[] = [];
 
  constructor(private checkAnnounces: CheckAnnouncesService) {
    this.dataSource = new MatTableDataSource<any>([]);
    console.log('test1',this.dataSource);
    
  }

  ngOnInit(): void {
    this.render();
  }

  render(){
    this.checkAnnounces.getAllAnnounces().subscribe((data: any) => {
      this.announces = data;
      console.log('ici',this.announces);
    });
  }

  async changeAnnounceStatus(userId:number, status: string){
    const token = localStorage.getItem('token');
    const url = `http://localhost:3333/api/admin/announce/${userId}`;
    const headers = { 'Authorization': `Bearer ${token}` };
    const body = { status: `${status}` };

    this.checkAnnounces.patchAnnounce(url, headers, body).subscribe(() => {
      this.render();
    });
  }

  async removeAnnounce(userId:number){
    const token = localStorage.getItem('token');
    const url = `http://localhost:3333/api/user/${userId}/announce`;
    const headers = { 'Authorization': `Bearer ${token}` };

    this.checkAnnounces.deleteAnnounce(url, headers).subscribe(() => {
      this.render();
    });
  }
}
