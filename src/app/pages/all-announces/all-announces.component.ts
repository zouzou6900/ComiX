import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { AllAnnouncesService } from '../../services/all-announces.service';

@Component({
  selector: 'app-all-announces',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './all-announces.component.html',
  styleUrl: './all-announces.component.scss'
})
export class AllAnnouncesComponent implements OnInit {

  announces: any[] = [];

  constructor(private allAnnouncesService: AllAnnouncesService) {}

    
}