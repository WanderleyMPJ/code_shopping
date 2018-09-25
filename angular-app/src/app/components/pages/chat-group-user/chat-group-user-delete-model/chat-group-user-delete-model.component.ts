import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ChatGroup, User} from "../../../../Models";
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {ChatGroupUserHttpService} from "../../../../services/http/chat-group-user-http.service";
import {ChatGroupHttpService} from "../../../../services/http/chat-group-http.service";
import {UserHttpService} from "../../../../services/http/user-http.service";


@Component({
  selector: 'chat-group-user-delete-model',
  templateUrl: './chat-group-user-delete-model.component.html',
  styleUrls: ['./chat-group-user-delete-model.component.css']
})
export class ChatGroupUserDeleteModelComponent implements OnInit {

    chatGroup: ChatGroup;
    user: User;

    _chatGroupId: number;
    _userId: number;

    @ViewChild(ModalComponent) modal: ModalComponent;

    @Output() onSuccess: EventEmitter<any> = new EventEmitter<any>();
    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

    constructor(private chatGroupUserHttp: ChatGroupUserHttpService,
                private chatGroupHttp: ChatGroupHttpService,
                private userHttp: UserHttpService) { }

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

    @Input()
    set userId(value){
        this._userId = value;
        if (this._userId) {
            this.userHttp
                .get(this._userId)
                .subscribe(user => this.user = user)
        }
    }

    destroy(){
        this.chatGroupUserHttp
            .destroy(this._chatGroupId, this._userId)
            .subscribe((chatGroup) => {
                this.onSuccess.emit(chatGroup);
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
