import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {NotifyMessageService} from "../../../../services/notify-message.service";
import {ProductListComponent} from "./product-list.component";


@Injectable({
    providedIn: 'root'
})

export class ProductDeleteServices{

    private _productListComponent: ProductListComponent;

    constructor(private notifyMessage: NotifyMessageService){

    }

    set productListComponente(value: ProductListComponent){
        this._productListComponent = value;
    }

    showModalDelete(productId: number){
        this._productListComponent.productId = productId;
        this._productListComponent.productDeleteModal.showModal();
    }


    onDeleteError($event: HttpErrorResponse) {
        if($event.status == 400){
            this.notifyMessage.error(`Não foi possível excluir o produto! ${$event.status}`);
        }

        this.notifyMessage.error(`Não foi possível excluir o produto! ${$event.status}`);

    }

    onDeleteSucess($event: any) {
        this.notifyMessage.success('Exclusão realizada com sucesso.')
        this._productListComponent.getProducts();
    }

}