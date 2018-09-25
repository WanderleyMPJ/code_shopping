import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ChatGroup} from "../../../../Models";
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {ChatGroupHttpService} from "../../../../services/http/chat-group-http.service";


@Component({
  selector: 'chat-group-delete-modal',
  templateUrl: './chat-group-delete-modal.component.html',
  styleUrls: ['./chat-group-delete-modal.component.css']
})
export class ChatGroupDeleteModalComponent implements OnInit {

    chatGroup: ChatGroup = null;

    _chatGroupId: number;

    @ViewChild(ModalComponent) modal: ModalComponent;

    @Output() onSucess: EventEmitter<any> = new EventEmitter<any>();
    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

    constructor(private chatGroupHttp: ChatGroupHttpService) { }

    ngOnInit() {
    }

    @Input()
    set chatGroupId(value){
        this._chatGroupId = value;
        if (this._chatGroupId) {
            this.chatGroupHttp
                .get(this._chatGroupId)
                .subscribe(chatGroup => this.chatGroup = chatGroup)
        }
    }

    destroy(){
        this.chatGroupHttp
            .destroy(this._chatGroupId)
            .subscribe((chatGroup) => {
                this.onSucess.emit(chatGroup);
                this.modal.hide();
            }, error => this.onError.emit(error));
    }

    showModal(){
        this.modal.show();
    }

    hideModal($event: Event){
        // fazer algo quando o model foi fechado
        console.log($event);
    }
}
