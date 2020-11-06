import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IHero } from 'src/services/heroes.service';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
})
export class HeroComponent {
  @Input() hero: IHero;
  @Input() index: number;

  constructor(private router: Router) {}

  seeHero(id: number) {
    this.router.navigate(['heroes', id]);
  }
}
