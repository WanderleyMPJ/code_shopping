import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {CategoryListComponent} from "./category-list.component";
import {NotifyMessageService} from "../../../../services/notify-message.service";

@Injectable({
    providedIn: 'root'
})

export class CategoryInsertServices{

    private _categoryListComponent: CategoryListComponent;

    constructor(private notifyMessage: NotifyMessageService){

    }

    set categoryListComonente(value: CategoryListComponent){
        this._categoryListComponent = value;
    }
    showModalinsert(){
        this._categoryListComponent.categoryNewModal.showModal();
    }

    onInsertError($event: HttpErrorResponse) {
        console.log($event);
    }

    onInsertSucess($event: any) {
        this.notifyMessage.success('Categoria cadastrada com sucesso!');
        this._categoryListComponent.getCategories();
    }
}