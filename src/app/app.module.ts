import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import {DashboardComponent} from "./dashboard.component";
import {ErrorComponent} from "./error.component";
import {CrisisListComponent} from "./crisis-list.component";
import {HeroesModule} from './heroes/hero.module'

import {AppRoutingModule} from "./app-routing.module"

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    HeroesModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    ErrorComponent,
    CrisisListComponent,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
