import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UserAnnounce } from '../../interfaces/announce-details';
import { AnnouncesService } from '../../services/announces.service';


@Component({
  selector: 'app-announce-details',
  standalone: true,
  imports: [],
  templateUrl: './announce-details.component.html',
  styleUrl: './announce-details.component.scss'
})
export class AnnounceDetailsComponent implements OnInit {

  announceId: number | undefined;
  user: UserAnnounce | null = null;

  constructor(
    private activatedRoute: ActivatedRoute,
    private announcesService: AnnouncesService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.announceId = this.activatedRoute.snapshot.params['id'];
    this.getCombinedUserData(this.announceId as number);
  }

  getCombinedUserData(id: number) {
    this.announcesService.getCombinedUserData(id).subscribe(user => this.user = user);
  }

  goBack(): void {
    window.history.back();
  }
}