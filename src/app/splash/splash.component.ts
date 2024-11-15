import { Component,OnInit, OnDestroy } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-splash',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './splash.component.html',
  styleUrl: './splash.component.css'
})
export class SplashComponent {
  images: string[] = [
    'assets/Splash 1.png',
    'assets/Splash 2.png',
    'assets/Splash 3.png'
  ];
  currentImage: string = this.images[0];
  private intervalId: any;

  ngOnInit() {
    let index = 0;
    this.intervalId = setInterval(() => {
      index = (index + 1) % this.images.length; // Looping array
      this.currentImage = this.images[index];
    }, 1000); // Ganti setiap 3 detik
  }

  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId); // Bersihkan interval saat komponen dihancurkan
    }
  }
}
