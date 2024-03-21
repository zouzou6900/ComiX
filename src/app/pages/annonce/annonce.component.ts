import { Component, OnInit } from '@angular/core';
import { AnnouncesAllService } from '../../services/announces-all.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { HeaderComponent } from '../../components/header/header.component';
export interface UserData {
  user: User[];
}

export interface User {
  id: number;
  firstname: string;
  lastname: string;
  // **Handle NISS with caution, avoid displaying unless necessary**
  // niss: string;
  nickname: string;
  email: string;
  address: Address;
  createdAt: string;
  updatedAt: string;
  announce: Announce;
  userProfile: UserProfile;
  gallery: GalleryImage[];
}

export interface Address {
  street: string;
  number: string;
  city: string;
  zip_code: number;
}

export interface Announce {
  id: number;
  userId: number;
  title: string;
  description: string;
  infidelityCard: boolean;
  private: boolean;
  escort: boolean;
  practices: number[];
  pricing: Pricing;
  status: string;
  createdAt: string;
  updatedAt: string;
}

export interface Pricing {
  "15min": number;
  "30min": number;
  "45min": number;
  "60min": number;
}

export interface UserProfile {
  id: number;
  userId: number;
  genre: string;
  orientation: string;
  size: number;
  weight: number;
  penisSize: number | null;
  braCup: string | null;
  hairColor: string;
  eyeColor: string;
  createdAt: string;
  updatedAt: string;
}

export interface GalleryImage {
  id: number;
  userId: number;
  url: string;
  cover: boolean;
}


@Component({
  selector: 'app-annonce',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './annonce.component.html',
  styleUrl: './annonce.component.scss'
})
export class AnnonceComponent implements OnInit{
  annonce!: UserData;
  error!: string;

  constructor (private announcesAllService: AnnouncesAllService, private route: ActivatedRoute, private http: HttpClient){}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.announcesAllService.getAnnonceById(id)
      .subscribe(data => {
        this.annonce = data;
        console.log(this.annonce);
        
      }, error => {
        this.error = 'Error fetching announcement';
        console.error('Error:', error);
      });
  }
}

