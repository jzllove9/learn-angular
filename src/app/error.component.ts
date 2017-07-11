import {Component} from '@angular/core';

@Component({
  selector: 'my-error',
  template:`
    <h1>{{title}}</h1>
  `,
})

export class ErrorComponent{
  title = "Page not found";
}
