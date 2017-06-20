import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Restangular } from 'ng2-restangular';
import 'rxjs/Rx';


@Component({
  selector: 'hero-dashboard',
  templateUrl: './src/heroapp/add-hero/add-hero.template.html'
})
export class HeroAddComponent {

  constructor(public restangular: Restangular, private router: Router) {
  }

  ngOnInit() {
  }

  submitForm (form){
    this.restangular.all('heroes').post(form.value);
    this.router.navigate(["/herolist"]);
  }

}
