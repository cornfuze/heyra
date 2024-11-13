import { Routes } from '@angular/router';
import { TeksAnimasiComponent } from './teks-animasi/teks-animasi.component';
import { GesturTeksComponent } from './gestur-teks/gestur-teks.component';
import { ForumComponent } from './forum/forum.component';
import { HomeComponent } from './home/home.component';
import { LivegesturComponent } from './livegestur/livegestur.component';
import { KamusComponent } from './kamus/kamus.component';

export const routes: Routes = [
    { path: '', component: HomeComponent }, // Halaman Home sebagai route default
    { path: 'teks-animasi', component: TeksAnimasiComponent },
    { path: 'kamus', component: KamusComponent},
    { path: 'gestur-teks', component: GesturTeksComponent },
    { path: 'forum', component: ForumComponent },
    { path: 'livegestur', component:LivegesturComponent }
];
