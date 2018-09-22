import { Component } from '@angular/core';

/**
 * Generated class for the ChatGroupListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'chat-group-list',
  templateUrl: 'chat-group-list.html'
})
export class ChatGroupListComponent {

  text: string;

  constructor() {
    console.log('Hello ChatGroupListComponent Component');
    this.text = 'Hello World';
  }

}
