import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {ProductHttpService} from "../../../../services/http/product-http.service";
import {Product} from "../../../../Models";
import {ModalComponent} from "../../../bootstrap/modal/modal.component";

@Component({
  selector: 'product-delete-modal',
  templateUrl: './product-delete-modal.component.html',
  styleUrls: ['./product-delete-modal.component.css']
})
export class ProductDeleteModalComponent implements OnInit {
    product: Product = null;

    _productId: number;

    @ViewChild(ModalComponent) modal: ModalComponent;

    @Output() onSucess: EventEmitter<any> = new EventEmitter<any>();
    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

    constructor(private productHttp: ProductHttpService) { }

    ngOnInit() {
    }

    @Input()
    set productId(value){
        this._productId = value;
        if (this._productId) {
            this.productHttp.get(value)
                .subscribe(product => this.product = product)
        }
    }

    destroy(){
        this.productHttp.destroy(this._productId)
            .subscribe((product) => {
                this.onSucess.emit(product);
                this.modal.hide();
            }, error => this.onError.emit(error));
    }

    showModal(){
        this.modal.show();
    }

    hideModal($event: Event){
        // fazer algo quando o model foi fechado
        console.log($event);
    }
}