import { Component } from '@angular/core';
import { Restangular } from 'ng2-restangular';
import 'rxjs/Rx';


@Component({
  selector: 'hero-dashboard',
  styleUrls: ['./src/heroapp/hero-dashboard/hero-dashboard.style.css'],
  templateUrl: './src/heroapp/hero-dashboard/hero-dashboard.template.html'
})
export class HeroDashboardComponent {

  public heroList;

  constructor(public restangular: Restangular) {
  }

  ngOnInit() {
    this.restangular.all("heroes").getList({number:4}).subscribe(heroes => {
      this.heroList = heroes;
    });
  }

}
