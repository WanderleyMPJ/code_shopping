import {Component, Input} from '@angular/core';
import {ChatMessage} from "../../../app/model";

@Component({
  selector: 'chat-content-right',
  templateUrl: 'chat-content-right.html'
})
export class ChatContentRightComponent {

    @Input()
    message : ChatMessage;

    constructor() {
    }

}
