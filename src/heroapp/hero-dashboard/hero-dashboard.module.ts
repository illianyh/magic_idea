import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeroDashboardComponent } from './hero-dashboard.component';

@NgModule({
  declarations: [HeroDashboardComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule
  ],
  exports: [HeroDashboardComponent]
})
export class HeroDashboardModule {


}
