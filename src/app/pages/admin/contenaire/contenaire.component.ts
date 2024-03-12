import { Component } from '@angular/core';
import { interval } from 'rxjs';
import { CommonModule } from '@angular/common';
import { ContentComponent } from '../content/content.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contenaire',
  standalone: true,
  imports: [CommonModule,ContentComponent],
  templateUrl: './contenaire.component.html',
  styleUrl: './contenaire.component.scss'
})
export class ContenaireComponent {
  dateActuelle: Date = new Date();
  title="Dashboard";
  
  constructor(private router: Router) { }

  getLastSegment(): string {
    const url = this.router.url;
    const segments = url.split('/');
    return segments[segments.length - 1];
  }

  ngOnInit() {
    this.startTimer();
    const title = this.getLastSegment();
  }

  startTimer() {
    interval(1000).subscribe(() => {
      this.dateActuelle = new Date();
    });
  }

}
