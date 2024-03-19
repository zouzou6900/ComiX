import { Component, OnInit } from '@angular/core';
import { MyAnnounceService } from '../../../services/my-announce.service';
import { FormsModule } from '@angular/forms';

interface PersonalData {
  announce: {
    title: string;
    description: string;
    infidelityCard: false;
    private: boolean;
    escort: boolean;
    practices: Practice[]; 
    }
}
interface Practice {
  id: number;
}

@Component({
  selector: 'app-my-ad',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './my-ad.component.html',
  styleUrl: './my-ad.component.scss'
})
export class MyAdComponent implements OnInit{

  personalData: PersonalData | null = null;
  isEditing = false;
  formData: any = {};
  

  constructor(private myAnnounceService: MyAnnounceService) {
  }

  ngOnInit() {
    this.myAnnounceService.getPersonalData().subscribe(data => {
      this.personalData = data as PersonalData;
      this.formData = { ...this.personalData };
      console.log(this.formData);
      console.log();
      
      
    });
  }
  toggleEdit() {
    this.isEditing = !this.isEditing;
  }

  onSubmit(formData: any) {
    const updateData = {
      title: formData.nickname,
      description: formData.email,
      private: formData.private,
      escort: formData.escort,
    }
    ;
    console.log('updateData:', updateData);
    console.log('Sending data (JSON format):', JSON.stringify(updateData));
    this.myAnnounceService.updatePersonalData(updateData).subscribe(
      response => {
        console.log('Update successful!', response);
        this.personalData = response;
        this.isEditing = false;
      },
      error => {
        console.error('Update failed:', error);
      }
    );
    window.location.reload();
  }
  
}