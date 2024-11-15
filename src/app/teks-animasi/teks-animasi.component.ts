import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-teks-animasi',
  standalone: true,

  templateUrl: './teks-animasi.component.html',
  styleUrl: './teks-animasi.component.css'
})
export class TeksAnimasiComponent {
  constructor(private location: Location) {}

  goBack(): void {
    this.location.back();
  }
}
