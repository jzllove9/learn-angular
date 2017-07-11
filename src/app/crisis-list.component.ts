import {Component} from '@angular/core';

@Component({
  selector: 'crisis-list',
  template: `
    <h1>{{title}}</h1>
    <h2>Get your crisis here</h2>
  `
})

export class CrisisListComponent {
  title = 'CRISIS CENTER';
}
