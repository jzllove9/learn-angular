import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import {HeroDetailComponent} from "./hero-detail.component";
import {HeroesComponent} from "./heroes.component";
import {HeroService} from "./hero.service";
import {HeroRoutingModule} from './hero-routing.moudle';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HeroRoutingModule
  ],
  declarations: [
    HeroDetailComponent,
    HeroesComponent,
  ],
  providers: [HeroService],

})

export class HeroesModule { }
