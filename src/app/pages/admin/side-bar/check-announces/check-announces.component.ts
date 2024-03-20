import { Component, OnInit } from '@angular/core';
import { AllAnnouncesService } from '../../../../services/all-announces.service';
import { Announces } from '../../../../interfaces/announces';
import {MatTableDataSource, MatTableModule} from '@angular/material/table';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

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
 
  constructor(private allAnnouncesService: AllAnnouncesService) {
    this.dataSource = new MatTableDataSource<any>([]);
    console.log('test1',this.dataSource);
    
  }

  ngOnInit(): void {
    this.allAnnouncesService.getAllAnnounces().subscribe((data: any) => {
      this.announces = data;
      console.log('ici',this.announces);
    });
    
  }


}
