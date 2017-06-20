import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { HeroAddComponent } from './add-hero.component';

@NgModule({
  declarations: [HeroAddComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    RouterModule
  ],
  exports: [HeroAddComponent]
})
export class HeroAddModule {


}
