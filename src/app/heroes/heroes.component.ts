import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  selectedHero: Hero;
  heroes;

  constructor(private heroService: HeroService){}

  ngOnInit() {
    this.getHeroes();
  }

  onSelect(hero : Hero) {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes=>this.heroes=heroes);
  } 
}