import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../../../../../../services/user-data.service';
import { FormsModule } from '@angular/forms';

interface PersonalData {
  user: {
    firstname: string;
    lastname: string;
    email: string;
    niss: string;
    nickname: string;
    password: string;
    address: {
      street: string;
      number: string;
      city: string;
      zip_code: string;
    };
  };
}
@Component({
  selector: 'app-my-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './my-modal.component.html',
  styleUrl: './my-modal.component.scss'
})
export class MyModalComponent implements OnInit {
  onSubmit(formData: any) {
    const updateData = {
			"id": formData.id,
			"firstname": formData.firstname,
			"lastname": formData.lastname,
			"niss": formData.niss,
			"nickname": formData.nickname,
			"email": formData.email,
			"address": {
				"street": formData.address.street,
				"number": formData.address.number,
				"city": formData.address.city,
				"zip_code": formData.address.zip_code
			},
			"createdAt": formData.createdAt,
			"updatedAt": formData.updatedAt,
			"announce": {
				"title": formData.announce.title,
				"description": formData.announce.description,
				"private": formData.announce.private,
				"escort": formData.announce.escort,
				"practices": [formData.announce.practices
				],
				"createdAt": formData,
				"updatedAt": formData
			}
    };

    this.userDataService.updatePersonalData(updateData).subscribe(
      response => {
        console.log('Update successful!', response);
        this.personalData = response; // Mettre à jour personalData avec les nouvelles données reçues du backend
        this.isEditing = false;
      },
      error => {
        console.error('Update failed:', error);
      }
    );
  }
  personalData: PersonalData | null = null;
  isEditing = false;
  formData: any = {};
  
constructor(private userDataService: UserDataService) {}
ngOnInit() {
  this.userDataService.getPersonalData().subscribe(data => {
    this.personalData = data as PersonalData;
    this.formData = { ...this.personalData.user };
    console.log(this.formData);
    
  });
}

}
