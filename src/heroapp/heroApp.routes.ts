import { Routes } from '@angular/router';

import { HeroAppComponent } from './heroApp.component';
import { HeroDashboardComponent } from './hero-dashboard/hero-dashboard.component';
import { HeroListComponent } from './hero-list/hero-list.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroAddComponent } from './add-hero/add-hero.component';

import { HomeComponent } from './home/home.component';


export const heroAppRoutes: Routes = [
  {
    path: '',
    component: HeroAppComponent,
    children: [
      {path: 'herolist', component: HeroListComponent},
      {path: 'herodashboard', component: HeroDashboardComponent},
      {path: 'herodetail/:id', component: HeroDetailComponent},
      {path: 'addhero', component: HeroAddComponent},
      {path: 'home', component: HomeComponent},
      {path: '', redirectTo: '/herolist', pathMatch: "full"}
    ]
  },
];

