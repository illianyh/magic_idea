import { Component } from '@angular/core';
import { Restangular } from 'ng2-restangular';
import 'rxjs/Rx';


@Component({
  selector: 'home',
  styleUrls: ['./src/heroapp/home/home.style.css'],
  templateUrl: './src/heroapp/home/home.template.html'
})
export class HomeComponent {

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
