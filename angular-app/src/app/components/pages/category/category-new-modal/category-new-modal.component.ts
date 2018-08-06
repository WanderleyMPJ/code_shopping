import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {CategoryHttpService} from "../../../../services/http/category-http.service";
import {FormBuilder, FormGroup} from "@angular/forms";

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
        this.form = this.formBuilder.group({
            name: '',
            active: true
        });
    }

  ngOnInit() {
  }

   submit(){
        // this.categoryHttp.create(this.category)
        //     .subscribe((category) => {
        //         this.onSucess.emit(category);
        //         this.modal.hide();
        //     }, error => this.onError.emit(error));
    }

  showModal(){
        this.modal.show();
  }

  hideModal($event: Event){
        // fazer algo quando o model foi fechado
        console.log($event);
  }

}
