import { Component, OnInit } from '@angular/core';
import { HeroesService, IHero } from 'src/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {
  heroes: IHero[] = [];

  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.heroes = this.heroesService.getHeroes();
  }
}
