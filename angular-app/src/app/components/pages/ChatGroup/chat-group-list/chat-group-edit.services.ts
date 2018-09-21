import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {NotifyMessageService} from "../../../../services/notify-message.service";
import {ChatGroupListComponent} from "./chat-group-list.component";

@Injectable({
    providedIn: 'root'
})

export class ChatGroupEditServices{

    private _chatGroupListComponent: ChatGroupListComponent;

    constructor(private notifyMessage: NotifyMessageService){

    }

    set ChatGroupListComonente(value: ChatGroupListComponent){
        this._chatGroupListComponent = value;
    }

    showModalEdit(chatGroupId: number){
        this._chatGroupListComponent.ChatGroupId = chatGroupId;
        this._chatGroupListComponent.ChatGroupEditModal.showModal();
    }

    onEditError($event: HttpErrorResponse) {
        this.notifyMessage.error(`Erro editando ChatGroup... ${$event}`);
    }

    onEditSucess($event: any) {
        this.notifyMessage.success('Categoria alterada com sucesso!');
        this._chatGroupListComponent.getChatGroups();
    }
}