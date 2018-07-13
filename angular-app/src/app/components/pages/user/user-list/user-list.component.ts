import {Component, OnInit, ViewChild} from '@angular/core';
import {NotifyMessageService} from "../../../../services/notify-message.service";
import {User} from "../../../../Models";
import {UserNewModalComponent} from "../user-new-modal/user-new-modal.component";
import {UserEditModalComponent} from "../user-edit-modal/user-edit-modal.component";
import {UserDeleteModalComponent} from "../user-delete-modal/user-delete-modal.component";
import {UserHttpService} from "../../../../services/http/user-http.service";
import {UserInsertServices} from "./user-insert.services";
import {UserEditServices} from "./user-edit.services";
import {UserDeleteServices} from "./user-delete.services";


@Component({
  selector: 'user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
    
  users : Array<User> = [];

    pagination = {
        page : 1,
        totalItems: 0,
        itemsPerPage: 15
    }

    @ViewChild(UserNewModalComponent) userNewModal: UserNewModalComponent;
    @ViewChild(UserEditModalComponent) userEditModal: UserEditModalComponent;
    @ViewChild(UserDeleteModalComponent) userDeleteModal: UserDeleteModalComponent;

    userId: number;

    constructor(private userHttp: UserHttpService,
                private notifyMessage: NotifyMessageService,
                protected userInsertServices: UserInsertServices,
                protected userEditServices: UserEditServices,
                protected userDeleteServices: UserDeleteServices){
        this.userInsertServices.userListComponent = this;
        this.userEditServices.userListComponente = this;
        this.userDeleteServices.userListComponente = this;
    }

    ngOnInit() {
        this.getUsers();
    }

    getUsers() {
        this.userHttp.list({page: this.pagination.page})
            .subscribe(response => {
                this.users = response.data;
                this.pagination.totalItems = response.meta.total;
                this.pagination.itemsPerPage = response.meta.per_page;
            })

    }

    pageChanged(page){
        this.pagination.page = page;
        this.getUsers();
    }
}
