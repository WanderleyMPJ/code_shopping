import {Component, Input} from '@angular/core';
import {ChatMessage} from "../../../app/model";

@Component({
  selector: 'chat-content-detail',
  templateUrl: 'chat-content-detail.html'
})
export class ChatContentDetailComponent {

    @Input()
    message : ChatMessage;

    constructor() {
    }

}
