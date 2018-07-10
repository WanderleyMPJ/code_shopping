import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {Product} from "../../../../Models";
import {HttpErrorResponse} from "@angular/common/http";
import {ProductHttpService} from "../../../../services/http/product-http.service";
import {ModalComponent} from "../../../bootstrap/modal/modal.component";

@Component({
  selector: 'product-edit-modal',
  templateUrl: './product-edit-modal.component.html',
  styleUrls: ['./product-edit-modal.component.css']
})
export class ProductEditModalComponent implements OnInit {

    product: Product = {
        name: '',
        description: '',
        slug: '',
        price: 0,
        active: true
    }

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
        if (this._productId){
            this.productHttp
                .get(this._productId)
                .subscribe(product => this.product = product)
        }
    }

    submit(){
        this.productHttp.update(this._productId, this.product)
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
