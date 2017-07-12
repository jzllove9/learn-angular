import {
	Component
}
from '@angular/core';

import {
	trigger,
	state,
	style,
	animate,
	transition
}
from '@angular/animations';

 @ Component({
	selector: 'my-app',
	template: `
	<h1>{{title}}</h1>
	<nav>
		<a routerLink="/crisis-list" routerLinkActive = "active">Crisis Center</a>
		<a routerLink="/dashboard" routerLinkActive = "active">Dashboard</a>
		<a routerLink="/heroes" routerLinkActive = "active">Heroes</a>
	</nav>

	<router-outlet></router-outlet>
	`, 
	styleUrls: ['./app.component.css'],
	/*animations: [
		trigger('heroState', [
				state('inactive', style({
						backgroundColor: '#eee',
						transform: 'scale(1)'
					})),
				state('active', style({
						backgroundColor: '#cfd8dc',
						transform: 'scale(1.1)'
					})),
				transition('inactive => active', animate('100ms ease-in')),
				transition('active => inactive', animate('100ms ease-out'))
			])
	]*/
})

export class AppComponent {
	title = 'Tour of heroes'
}