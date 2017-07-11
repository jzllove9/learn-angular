import { Component, Input, OnInit } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { Router } from '@angular/router';
import {Location} from '@angular/common';

import { Hero } from './hero';
import {HeroService} from './hero.service';

import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})

export class HeroDetailComponent implements OnInit {
  constructor(
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router
  ) { };

  ngOnInit(): void {

    //可观察对象
    this.route.params
      .switchMap((params: Params) =>
        // (+) converts string 'id' to a number
        this.heroService.getHero(+params['id'])
      )
      .subscribe(hero => this.hero = hero);

    /*
    //snapshot 快照
    let id = +this.route.snapshot.params['id'];
    this.heroService.getHero(id).then(hero => this.hero = hero);
    */
  };

  goBack(): void {
    this.location.back();
  };

  gotoHeroes(): void {
    let heroId = this.hero ? this.hero.id : null;
    this.router.navigate(['/heroes', { id: heroId, foo: "foo" }]);
  };

  @Input() hero: Hero;
}
