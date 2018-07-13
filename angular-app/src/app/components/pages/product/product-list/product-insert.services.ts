import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {ProductListComponent} from "./product-list.component";
import {NotifyMessageService} from "../../../../services/notify-message.service";

@Injectable({
    providedIn: 'root'
})

export class ProductInsertServices{

    private _productListComponent: ProductListComponent;

    constructor(private notifyMessage: NotifyMessageService){

    }

    set productListComponente(value: ProductListComponent){
        this._productListComponent = value;
    }
    showModalinsert(){
        this._productListComponent.productNewModal.showModal();
    }

    onInsertError($event: HttpErrorResponse) {
        this.notifyMessage.error('Erro cadastrando Produto');
    }

    onInsertSucess($event: any) {
        this.notifyMessage.success('Produto cadastrado com sucesso!');
        this._productListComponent.getProducts();
    }
}