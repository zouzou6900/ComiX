import { Component } from "@angular/core";
import { LogoComponent } from "../../logo/logo.component";
import { HeaderUtilsComponent } from "./header-utils/header-utils.component";

@Component({
  selector: "app-header-top",
  standalone: true,
  imports: [LogoComponent, HeaderUtilsComponent],
  templateUrl: "./header-top.component.html",
  styleUrl: "./header-top.component.scss",
})
export class HeaderTopComponent {}
