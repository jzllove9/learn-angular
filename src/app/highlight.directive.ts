import {
	Directive,
	ElementRef,
	Input,
	HostListener
}
from '@angular/core';

 @ Directive({
	selector: '[myHighlight]'
})
export class HighlightDirective {

	 @ Input('myHighlight') highlightColor:string;

	constructor(private el: ElementRef) {}

	 @ HostListener('mouseenter')onMouseEnter() {
		this.highlight(this.highlightColor || 'red');
	}

	 @ HostListener('mouseleave')onMouseLeave() {
		this.highlight(null);
	}

	private highlight(color: String) {
		this.el.nativeElement.style.backgroundColor = color;
	}
}
