import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../../services/user-data.service';
import { userProfileService } from '../../../services/user-profile.service';

interface AdvertiserProfile {
    genre: string;
    orientation: string;
    size: number;
    weight: number;
    penisSize: 8;
    braCup: string;
    hairColor: string;
    eyeColor: string;
}

@Component({
  selector: 'app-my-advertiser-profil',
  standalone: true,
  imports: [],
  templateUrl: './my-advertiser-profil.component.html',
  styleUrl: './my-advertiser-profil.component.scss'
})
export class MyAdvertiserProfilComponent  implements OnInit {

  myadvertiserProfile: AdvertiserProfile | null = null;
  isEditing = false;
  formData: any = {};
  

  constructor(private userProfileService: userProfileService) {
   
  }

  ngOnInit() {
    this.userProfileService.getPersonalData().subscribe(data => {
      this.myadvertiserProfile = data as AdvertiserProfile;
    });
  }}