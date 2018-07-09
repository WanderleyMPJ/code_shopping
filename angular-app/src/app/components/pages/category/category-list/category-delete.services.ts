import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {CategoryListComponent} from "./category-list.component";
import {NotifyMessageService} from "../../../../services/notify-message.service";

@Injectable({
    providedIn: 'root'
})

export class CategoryDeleteServices{

    private _categoryListComponent: CategoryListComponent;

    constructor(private notifyMessage: NotifyMessageService){

    }

    set categoryListComonente(value: CategoryListComponent){
        this._categoryListComponent = value;
    }

    showModalDelete(categoryId: number){
        this._categoryListComponent.categoryId = categoryId;
        this._categoryListComponent.categoryDeleteModal.showModal();
    }


    onDeleteError($event: HttpErrorResponse) {
        if($event.status == 400){
            this.notifyMessage.error(`Não foi possível excluir a categoria! ' +
                'verifique se a mesma não está relacionada com produtos.. ${$event.status}`);
        }

        this.notifyMessage.error('Não foi possível excluir a categoria! ' +
            `verifique se a mesma não está relacionada com produtos.. ${$event.status}`);

    }

    onDeleteSucess($event: any) {
        this.notifyMessage.success('Exclusão realizada com sucesso.')
        this._categoryListComponent.getCategories();
    }

}