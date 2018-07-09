import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {CategoryListComponent} from "./category-list.component";
import {NotifyMessageService} from "../../../../services/notify-message.service";

@Injectable({
    providedIn: 'root'
})

export class CategoryEditServices{

    private _categoryListComponent: CategoryListComponent;

    constructor(private notifyMessage: NotifyMessageService){

    }

    set categoryListComonente(value: CategoryListComponent){
        this._categoryListComponent = value;
    }

    showModalEdit(categoryId: number){
        this._categoryListComponent.categoryId = categoryId;
        this._categoryListComponent.categoryEditModal.showModal();
    }

    onEditError($event: HttpErrorResponse) {
        this.notifyMessage.success(`Erro editando Category... ${$event}`);
    }

    onEditSucess($event: any) {
        this.notifyMessage.success('Categoria alterada com sucesso!');
        this._categoryListComponent.getCategories();
    }
}