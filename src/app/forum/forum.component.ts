import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-forum',
  standalone: true,
  imports: [],
  templateUrl: './forum.component.html',
  styleUrl: './forum.component.css'
})
export class ForumComponent {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
