import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AllAnnouncesService } from '../../../../services/all-announces.service';
import { Announces } from '../../../../interfaces/announces';

@Component({
  selector: 'app-check-announces',
  standalone: true,
  imports: [],
  templateUrl: './check-announces.component.html',
  styleUrl: './check-announces.component.scss'
})
export class CheckAnnouncesComponent implements OnInit {

  announces: any[] = [];

  constructor(private allAnnouncesService: AllAnnouncesService) {}

  ngOnInit() {
    this.allAnnouncesService.getAllAnnounces().subscribe((data: any) => {
      this.announces = data;
    });
    
  }


}
