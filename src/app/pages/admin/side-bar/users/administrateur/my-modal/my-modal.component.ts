import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../../../../../services/user-data.service';
import { FormsModule } from '@angular/forms';
import { PersonalDataFull } from '../../../../../../interfaces/personal-data-full';
import { UserFullProfilService } from '../../../../../../services/user-full-profil.service';

@Component({
  selector: 'app-my-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './my-modal.component.html',
  styleUrl: './my-modal.component.scss',
})
export class MyModalComponent implements OnInit {
  personalData: PersonalDataFull | null = null;
  formData: any = {};

  constructor(
    private userFullProfilService: UserFullProfilService,
    private userDataService: UserDataService
  ) {}
  ngOnInit(): void {
    this.userDataService.getPersonalData().subscribe((data) => {
      this.personalData = data as PersonalDataFull;
      this.formData = { ...this.personalData.user };
    });
    // this.userFullProfilService.getUsersFull().subscribe((data) => {
    //   this.formData = data;
    //   console.log(this.userFullProfilService);
    // });
  }

  // ngOnInit() {
  //   this.userDataService.getPersonalData().subscribe((data) => {
  //     this.personalData = data as PersonalDataFull;
  //     this.formData = { ...this.personalData.user };
  //   });
  // }
}
