import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-livegestur',
  standalone: true,
  imports: [],
  templateUrl: './livegestur.component.html',
  styleUrl: './livegestur.component.css'
})
export class LivegesturComponent {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
