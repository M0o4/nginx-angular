import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'main-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss',
})
export class MainPageComponent {}
