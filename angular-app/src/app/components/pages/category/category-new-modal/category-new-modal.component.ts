import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {CategoryHttpService} from "../../../../services/http/category-http.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import fieldsOptions from '../category-form/category-fields-options'
import {max} from "rxjs/operators";

@Component({
  selector: 'category-new-modal',
  templateUrl: './category-new-modal.component.html',
  styleUrls: ['./category-new-modal.component.css']
})
export class CategoryNewModalComponent implements OnInit {

    @ViewChild(ModalComponent) modal: ModalComponent;

    @Output() onSucess: EventEmitter<any> = new EventEmitter<any>();
    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

    form: FormGroup;
    constructor(private categoryHttp: CategoryHttpService, private formBuilder: FormBuilder) {
        const maxLenght = fieldsOptions.name.validationMessage.maxlengh;
        this.form = this.formBuilder.group({
            name: ['', [Validators.required, Validators.maxLength(maxLenght)]],
            active: true
        });
    }

  ngOnInit() {
  }

   submit(){
        this.categoryHttp.create(this.form.value)
            .subscribe((category) => {
                this.form.reset({
                   name: '',
                   active: true
                });
                this.onSucess.emit(category);
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
