import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ContenaireComponent } from '../../../contenaire/contenaire.component';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [RouterOutlet, RouterLinkActive, RouterLink, ContenaireComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {}
