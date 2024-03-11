import { Component, OnInit, Inject } from "@angular/core";

import { FormsModule, ReactiveFormsModule } from "@angular/forms";

@Component({
  selector: "app-header-bottom",
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: "./header-bottom.component.html",
  styleUrl: "./header-bottom.component.scss",
})
export class HeaderBottomComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
