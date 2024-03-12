import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { RouterLink } from "@angular/router";
import { RouterModule } from "@angular/router";
import { CarouselComponent } from "../../components/carousel/carousel.component";

@Component({
  selector: "app-home",
  standalone: true,
  imports: [RouterLink, CarouselComponent],
  templateUrl: "./home.component.html",
  styleUrl: "./home.component.scss",
})
export class HomeComponent {}
