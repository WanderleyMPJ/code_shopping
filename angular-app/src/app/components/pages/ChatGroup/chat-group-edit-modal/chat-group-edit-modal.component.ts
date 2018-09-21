import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {HttpErrorResponse} from "@angular/common/http";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ChatGroupHttpService} from "../../../../services/http/chat-group-http.service";
import {ChatGroup} from "../../../../Models";
import fieldsOptions from "../chat-group-form/chat-group-fields-options";

@Component({
  selector: 'chat-group-edit-modal',
  templateUrl: './chat-group-edit-modal.component.html',
  styleUrls: ['./chat-group-edit-modal.component.css']
})
export class ChatGroupEditModalComponent implements OnInit {

    _chatGroupId: number;
    chatGroup: ChatGroup;
    form: FormGroup;
    has_photo: boolean;

    @ViewChild(ModalComponent) modal: ModalComponent;

    @Output() onSucess: EventEmitter<any> = new EventEmitter<any>();
    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

    constructor(private chatGroupHttp: ChatGroupHttpService, private formBuilder: FormBuilder) {
        const maxLenght = fieldsOptions.name.validationMessage.maxlengh;
        this.form = this.formBuilder.group({
            name: ['', [Validators.required,Validators.maxLength(maxLenght)]],
            photo: null
        });
    }

    ngOnInit() {
    }

    @Input()
    set chatGroupId(value){
        this._chatGroupId = value;
        if (this._chatGroupId){
            this.chatGroupHttp
                .get(this._chatGroupId)
                .subscribe(
                    chatGroup => {
                        this.chatGroup = chatGroup;
                        this.form.patchValue(chatGroup);
                    },
                    responseError => {
                        if(responseError.status == 401){
                            this.modal.hide();
                        }
                    }
                )
        }
    }

    submit(){
        this.chatGroupHttp
            .update(this._chatGroupId, this.form.value)
            .subscribe((chatGroup) => {
                // this.form.reset({
                //     name: '',
                //     photo: null
                // })
                this.onSucess.emit(chatGroup);
                this.modal.hide();
            }, error => this.onError.emit(error));
    }

    showModal(){
        this.modal.show();
    }

    hideModal($event: Event){
        // fazer algo quando o model foi fechado
        // this.chatGroup.name = '';
        // this.chatGroup.active = false;
        console.log($event);
    }
}
