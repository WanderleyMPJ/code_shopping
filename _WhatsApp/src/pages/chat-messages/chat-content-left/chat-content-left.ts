import {Component, Input} from '@angular/core';
import {ChatMessage} from "../../../app/model";

@Component({
  selector: 'chat-content-left',
  templateUrl: 'chat-content-left.html'
})
export class ChatContentLeftComponent {

  @Input()
  message : ChatMessage;

  constructor() {
  }

}
