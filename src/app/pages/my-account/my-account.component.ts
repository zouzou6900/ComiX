import { Component, NgModule, OnInit } from '@angular/core';
import { HeaderComponent } from '../../components/header/header.component';
import { Router, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-my-account',
  standalone: true,
  imports: [HeaderComponent, RouterOutlet, RouterModule, RouterLinkActive],
  templateUrl: './my-account.component.html',
  styleUrl: './my-account.component.scss'
})
export class MyAccountComponent {

  showParagraph: boolean = true;

  constructor(public location: Location){}

  
}

