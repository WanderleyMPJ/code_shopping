import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {NotifyMessageService} from "../../../../services/notify-message.service";
import {ChatGroupListComponent} from "./chat-group-list.component";

@Injectable({
    providedIn: 'root'
})

export class ChatGroupInsertServices{

    private _chatGroupListComponent: ChatGroupListComponent;

    constructor(private notifyMessage: NotifyMessageService){

    }

    set ChatGroupListComonente(value: ChatGroupListComponent){
        this._chatGroupListComponent = value;
    }

    showModalInsert(){
        this._chatGroupListComponent.ChatGroupNewModal.showModal();
    }

    onInsertError($event: HttpErrorResponse) {
        console.log($event);
    }

    onInsertSucess($event: any) {
        this.notifyMessage.success('Chat Grupo cadastrado com sucesso!');
        this._chatGroupListComponent.getChatGroups();
    }
}