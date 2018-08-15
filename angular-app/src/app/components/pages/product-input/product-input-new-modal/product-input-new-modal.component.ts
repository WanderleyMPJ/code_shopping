import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ProductInputHttpService} from "../../../../services/http/product-input-http.service";
import fieldsOptions from "../product-input-form/product-input-fields-options";

@Component({
  selector: 'product-input-new-modal',
  templateUrl: './product-input-new-modal.component.html',
  styleUrls: ['./product-input-new-modal.component.css']
})
export class ProductInputNewModalComponent implements OnInit {
    @ViewChild(ModalComponent) modal: ModalComponent;

    @Output() onSucess: EventEmitter<any> = new EventEmitter<any>();
    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

    form: FormGroup;
    errors = {};
    constructor(private inputHttp: ProductInputHttpService, 
                private formBuilder: FormBuilder) {
        // const maxLenght = fieldsOptions.product.validationMessage.maxlengh;
        this.form = this.formBuilder.group({
            product_id: ['', [Validators.required]],
            amount: ['', [Validators.required]]
        });
    }

    ngOnInit() {
    }

    submit(){
        this.inputHttp.create(this.form.value)
            .subscribe((input) => {
                this.form.reset({
                    name: '',
                    active: true
                });
                this.onSucess.emit(input);
                this.modal.hide();
            }, responseError => {
                if(responseError.status === 422){
                    this.errors = responseError.error.errors
                }
                this.onError.emit(responseError)
            });
    }

    showModal(){
        this.modal.show();
    }

    showErrors(){
        return Object.keys(this.errors).length != 0;
    }

    hideModal($event: Event){
        // fazer algo quando o model foi fechado
        console.log($event);
    }

}
