import { Component } from '@angular/core';
import { SideBarComponent } from './side-bar/side-bar.component';

@Component({
  selector: 'app-admin',
  standalone: true,
  imports: [SideBarComponent],
  templateUrl: './admin.component.html',
  styleUrl: './admin.component.scss',
})
export class AdminComponent {}
