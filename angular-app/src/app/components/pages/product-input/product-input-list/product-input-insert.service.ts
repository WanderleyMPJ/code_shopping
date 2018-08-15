import { Injectable } from '@angular/core';
import {NotifyMessageService} from "../../../../services/notify-message.service";
import {HttpErrorResponse} from "@angular/common/http";
import {ProductInputListComponent} from "./product-input-list.component";

@Injectable({
  providedIn: 'root'
})
export class ProductInputInsertService {

    private _inputListComponent: ProductInputListComponent;

    constructor(private notifyMessage: NotifyMessageService){

    }

    set inputListComponente(value: ProductInputListComponent){
        this._inputListComponent = value;
    }

    showModalinsert(){
        this._inputListComponent.InputNewModal.showModal();
    }

    onInsertError($event: HttpErrorResponse) {
        console.log($event);
    }

    onInsertSucess($event: any) {
        this.notifyMessage.success('Entrada cadastrada com sucesso!');
        this._inputListComponent.getInputs();
    }}
