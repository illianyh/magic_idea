import { Component } from '@angular/core';
import { Restangular } from 'ng2-restangular';
import 'rxjs/Rx';


@Component({
  selector: 'hero-list',
  styleUrls: ['./src/heroapp/hero-list/hero-list.style.css'],
  templateUrl: './src/heroapp/hero-list/hero-list.template.html'
})
export class HeroListComponent {

  private heroes;
  private subscribers;

  public heroList;

  constructor(public restangular: Restangular) {
    this.heroes = restangular.all("heroes");
  }

  ngOnInit() {
    this.subscribers = this.heroes.getList().subscribe(heroes => {
      this.heroList = heroes;
    });
  }
  
  ngOnDestroy() {
    
    this.subscribers.unsubscribe();
  }

}
