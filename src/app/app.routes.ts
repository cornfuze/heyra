import { Routes } from '@angular/router';
import { TeksAnimasiComponent } from './teks-animasi/teks-animasi.component';
import { GesturTeksComponent } from './gestur-teks/gestur-teks.component';
import { ForumComponent } from './forum/forum.component';

export const routes: Routes = [
    { path: 'teks-animasi', component: TeksAnimasiComponent },
    { path: 'gestur-teks', component: GesturTeksComponent },
    { path: 'forum', component: ForumComponent },
    { path: '', redirectTo: '/home', pathMatch: 'full' }, // halaman utama
];
