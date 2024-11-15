import { Component,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { SplashComponent } from './splash/splash.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,SplashComponent,CommonModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
    title = 'heyra';
    isLoading = true;

  constructor(private router: Router) {}

  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false; // Menghilangkan splash screen setelah 5 detik
    }, 4000); // Durasi splash screen

    // Jika ada logika lain yang ingin ditambahkan pada `ngOnInit`, tambahkan di sini
  }

  isActive(route: string): boolean {
    return this.router.url === route;
  }
}
