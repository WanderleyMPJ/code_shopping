import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {ModalComponent} from "../../../bootstrap/modal/modal.component";
import {User} from "../../../../Models";
import {UserHttpService} from "../../../../services/http/user-http.service";

@Component({
  selector: 'user-delete-modal',
  templateUrl: './user-delete-modal.component.html',
  styleUrls: ['./user-delete-modal.component.css']
})
export class UserDeleteModalComponent implements OnInit {
    user: User = null;

    _userId: number;

    @ViewChild(ModalComponent) modal: ModalComponent;

    @Output() onSucess: EventEmitter<any> = new EventEmitter<any>();
    @Output() onError: EventEmitter<HttpErrorResponse> = new EventEmitter<HttpErrorResponse>();

    constructor(private userHttp: UserHttpService) { }

    ngOnInit() {
    }

    @Input()
    set userId(value){
        this._userId = value;
        if (this._userId) {
            this.userHttp.get(value)
                .subscribe(user => this.user = user)
        }
    }

    destroy(){
        this.userHttp.destroy(this._userId)
            .subscribe((user) => {
                this.onSucess.emit(user);
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
