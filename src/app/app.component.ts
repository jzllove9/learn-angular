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
		<a routerLink="/heroess" routerLinkActive = "active" (@a_state.done)= "animationDone($event)" [@a_state]="_s" (click)="toggleState()">testBtn</a>
	</nav>

	<router-outlet></router-outlet>
	`, 
	styleUrls: ['./app.component.css'],
	animations: [
		/*trigger('a_state', [
		state('inactive', style({
		//backgroundColor: '#eee',
		transform: 'scale(1)'
		})),
		state('active', style({
		//backgroundColor: '#cfd8dc',
		transform: 'scale(1.1)'
		})),
		transition('inactive => active', animate('100ms ease-in')),
		transition('active => inactive', animate('100ms ease-out'))
		])*/

		/*trigger('flyInOut', [
		state('in', style({transform: 'translateX(0)'})),
		transition('void => *', [
		style({transform: 'translateX(-100%)'}),
		animate(100)
		]),
		transition('* => void', [
		animate(100, style({transform: 'translateX(100%)'}))
		])
		])*/

		trigger('a_state', [
				state('inactive', style({
						transform: 'translateX(0) scale(1)'
					})),
				state('active', style({
						transform: 'translateX(0) scale(1.1)'
					})),
				transition('inactive => active', animate('100ms ease-in')),
				transition('active => inactive', animate('100ms ease-out')),
				transition('void => inactive', [
						style({
							transform: 'translateX(-100%) scale(1)'
						}),
						animate(100)
					]),
				transition('inactive => void', [
						animate(100, style({
								transform: 'translateX(100%) scale(1)'
							}))
					]),
				transition('void => active', [
						style({
							transform: 'translateX(0) scale(0)'
						}),
						animate(200)
					]),
				transition('active => void', [
						animate(200, style({
								transform: 'translateX(0) scale(0)'
							}))
					])
			])
	]
})

export class AppComponent {
	title = 'Tour of heroes';

	_s = 'inactive';
	// _s = 'in';

	toggleState(): void {
		this._s = this._s == 'active' ? 'inactive' : 'active';
		// this._s = this._s == 'in' ? 'void' : 'in';
	}

	animationDone(e: AnimationTransitionEvent): void {
		console.log(e);
	}
}
