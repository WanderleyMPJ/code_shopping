import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";

import {NotifyMessageService} from "../../../../services/notify-message.service";
import {UserListComponent} from "./user-list.component";

@Injectable({
    providedIn: 'root'
})

export class UserInsertServices{

    private _userListComponent: UserListComponent;

    constructor(private notifyMessage: NotifyMessageService){

    }

    set userListComponent(value: UserListComponent){
        this._userListComponent = value;
    }
    showModalinsert(){
        this._userListComponent.userNewModal.showModal();
    }

    onInsertError($event: HttpErrorResponse) {
        console.log($event);
    }

    onInsertSucess($event: any) {
        this.notifyMessage.success('Usuário cadastrado com sucesso!');
        this._userListComponent.getUsers();
    }
}