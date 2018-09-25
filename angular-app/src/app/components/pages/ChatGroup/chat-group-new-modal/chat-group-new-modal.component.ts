import {Component, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ChatGroupHttpService} from "../../../../services/http/chat-group-http.service";
import fieldsOptions from "../chat-group-form/chat-group-fields-options";

@Component({
  selector: 'chat-group-new-modal',
  templateUrl: './chat-group-new-modal.component.html',
  styleUrls: ['./chat-group-new-modal.component.css']
})
export class ChatGroupNewModalComponent implements OnInit {

    form: FormGroup;
    errors = {};

    @ViewChild(ModalComponent) modal: ModalComponent;

    @Output() onSucess: EventEmitter<any> = new EventEmitter<any>();
    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

    constructor(private chatGroupHttp: ChatGroupHttpService,
                private formBuilder: FormBuilder) {
        const maxLenght = fieldsOptions.name.validationMessage.maxlengh;
        this.form = this.formBuilder.group({
            name: ['', [Validators.required,Validators.maxLength(maxLenght)]],
            photo: [null,Validators.required]
        });
    }

    ngOnInit() {
    }

    submit(){
        this.chatGroupHttp
            .create(this.form.value)
            .subscribe((chatGroup) => {
                this.form.reset({
                    name: '',
                    photo: null
                });
                this.onSucess.emit(chatGroup);
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
