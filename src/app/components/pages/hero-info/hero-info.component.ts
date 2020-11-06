import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroesService, IHero } from 'src/services/heroes.service';

@Component({
  selector: 'app-hero-info',
  templateUrl: './hero-info.component.html',
  styleUrls: ['./hero-info.component.css'],
})
export class HeroInfoComponent {
  hero: IHero;
  heroId: number;

  constructor(
    private activatedRoute: ActivatedRoute,
    private herosService: HeroesService,
    private location: Location
  ) {
    this.activatedRoute.params.subscribe((params) => {
      this.heroId = parseInt(params['id']);
    });

    this.hero = this.herosService.getHeroById(this.heroId);
  }

  goBack() {
    return this.location.back();
  }
}
