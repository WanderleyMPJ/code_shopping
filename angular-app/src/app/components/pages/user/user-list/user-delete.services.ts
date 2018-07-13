import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {NotifyMessageService} from "../../../../services/notify-message.service";
import {UserListComponent} from "./user-list.component";

@Injectable({
    providedIn: 'root'
})

export class UserDeleteServices{

    private _userListComponent: UserListComponent;

    constructor(private notifyMessage: NotifyMessageService){

    }

    set userListComponente(value: UserListComponent){
        this._userListComponent = value;
    }

    showModalDelete(userId: number){
        this._userListComponent.userId = userId;
        this._userListComponent.userDeleteModal.showModal();
    }


    onDeleteError($event: HttpErrorResponse) {
        if($event.status == 400){
            this.notifyMessage.error(`Não foi possível excluir o usuário! ${$event.status}`);
        }

        this.notifyMessage.error(`Não foi possível excluir o usuário! ${$event.status}`);

    }

    onDeleteSucess($event: any) {
        this.notifyMessage.success('Exclusão realizada com sucesso.')
        this._userListComponent.getUsers();
    }

}