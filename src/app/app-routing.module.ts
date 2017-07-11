import { NgModule }      from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {HeroDetailComponent} from "./heroes/hero-detail.component";
import {DashboardComponent} from "./dashboard.component";
import {ErrorComponent} from "./error.component";
import {CrisisListComponent} from "./crisis-list.component";

const routes: Routes = [
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'detail/:id',
    component: HeroDetailComponent
  },
  {
      path: 'crisis-list',
      component: CrisisListComponent
  },
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})

export class AppRoutingModule { }
