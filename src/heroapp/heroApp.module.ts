import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';


import { HeroAppComponent } from './heroApp.component';
import { HeroDashboardModule } from './hero-dashboard/hero-dashboard.module';
import { RouterModule } from '@angular/router';
import { HeroListModule } from './hero-list/hero-list.module';
import { HeroDetailModule } from './hero-detail/hero-detail.module';
import { HeroAddModule } from './add-hero/add-hero.module';
import { HomeModule } from './home/home.module';

@NgModule({
  declarations: [
    HeroAppComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    HeroDetailModule,
    RouterModule,
    HeroListModule,
    HeroDashboardModule,
    HeroAddModule,
    HomeModule
  ],
  exports: [HeroAppComponent]
})
export class HeroAppModule {
}
