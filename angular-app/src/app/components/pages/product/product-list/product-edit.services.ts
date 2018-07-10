import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {NotifyMessageService} from "../../../../services/notify-message.service";
import {ProductListComponent} from "./product-list.component";

@Injectable({
    providedIn: 'root'
})

export class ProductEditServices{

    private _productListComponent: ProductListComponent;

    constructor(private notifyMessage: NotifyMessageService){

    }

    set productListComponente(value: ProductListComponent){
        this._productListComponent = value;
    }

    showModalEdit(productId: number){
        this._productListComponent.productId = productId;
        this._productListComponent.productEditModal.showModal();
    }

    onEditError($event: HttpErrorResponse) {
        this.notifyMessage.error(`Erro editando Produto. ${$event.message}`);
    }

    onEditSucess($event: any) {
        this.notifyMessage.success('Produto alterado com sucesso!');
        this._productListComponent.getProducts();
    }
}