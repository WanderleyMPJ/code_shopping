import {Component, Input} from '@angular/core';

@Component({
  selector: 'chat-content-right',
  templateUrl: 'chat-content-right.html'
})
export class ChatContentRightComponent {

    @Input()
    message;

    constructor() {
    }

}
