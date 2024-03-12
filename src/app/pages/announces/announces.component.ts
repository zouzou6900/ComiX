import { Component } from "@angular/core";
import { QuickSearchComponent } from "../../components/quick-search/quick-search.component";

@Component({
  selector: "app-announces",
  standalone: true,
  imports: [QuickSearchComponent],
  templateUrl: "./announces.component.html",
  styleUrl: "./announces.component.scss",
})
export class AnnouncesComponent {}
