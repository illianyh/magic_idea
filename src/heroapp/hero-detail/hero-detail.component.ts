import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Restangular } from 'ng2-restangular';
import 'rxjs/Rx';

@Component({
  selector: 'hero-detail',
  styleUrls: ['./src/heroapp/hero-detail/hero-detail.style.css'],
  templateUrl: './src/heroapp/hero-detail/hero-detail.template.html'
})
export class HeroDetailComponent {

  private heroes;
  private id: number;

  public hero: Restangular;
  public editable: boolean;

  constructor(private route: ActivatedRoute, private restangular: Restangular, private router: Router) {
    this.heroes = restangular.all("heroes");
  }

  ngOnInit() {
    this.route.params.forEach((params: Params) => {
      this.id = params['id'];
      console.log(this.id)
    });
    this.restangular.one("heroes", this.id).get().subscribe(res => {
      this.hero = res;
    });
  }

  deleteHero() {
    this.hero.remove().subscribe(heroes => {
      this.router.navigate(["/herolist"]);
    })
  }

  editHero() {
    if (this.editable) {
      this.hero.put();
      this.editable = false;
    }
    else {
      this.editable = true;}
  }

}
