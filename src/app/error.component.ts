import {
	Component
}
from '@angular/core';

 @ Component({
	selector: 'my-error',
	templateUrl: './error.component.html', 
})

export class ErrorComponent {
	title = "Page not found";
	color:string;
}
