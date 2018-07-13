import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {NotifyMessageService} from "../../../../services/notify-message.service";
import {UserListComponent} from "./user-list.component";

@Injectable({
    providedIn: 'root'
})

export class UserEditServices{

    private _userListComponent: UserListComponent;

    constructor(private notifyMessage: NotifyMessageService){

    }

    set userListComponente(value: UserListComponent){
        this._userListComponent = value;
    }

    showModalEdit(userId: number){
        this._userListComponent.userId = userId;
        this._userListComponent.userEditModal.showModal();
    }

    onEditError($event: HttpErrorResponse) {
        this.notifyMessage.error(`Erro editando Usuário. ${$event.message}`);
    }

    onEditSucess($event: any) {
        this.notifyMessage.success('Categoria alterada com sucesso!');
        this._userListComponent.getUsers();
    }
}