import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-kamus',
  standalone: true,
  imports: [],
  templateUrl: './kamus.component.html',
  styleUrl: './kamus.component.css'
})
export class KamusComponent {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
