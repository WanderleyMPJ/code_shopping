import {Component, Input} from '@angular/core';

@Component({
  selector: 'chat-content-left',
  templateUrl: 'chat-content-left.html'
})
export class ChatContentLeftComponent {

  @Input()
  message;

  constructor() {
  }

}
