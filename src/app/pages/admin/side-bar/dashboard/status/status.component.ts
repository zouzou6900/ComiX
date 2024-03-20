import { Component, OnInit } from '@angular/core';
import { StatService } from '../../../../../services/stat.service';

@Component({
  selector: 'app-status',
  standalone: true,
  imports: [],
  templateUrl: './status.component.html',
  styleUrl: './status.component.scss'
})
export class StatusComponent implements OnInit {
  stats: []=[];
  constructor(private statService:StatService){}
  ngOnInit(): void {
    this.statService.getStat().subscribe((data: any) => {
      this.stats = data;
      console.log('ici stat',this.stats);
    },
    (error) => {
      console.error(
        'Erreur lors de la récupération des stats:',
        error
      );
    });
  }
}
