import {Component, OnInit, ViewChild} from '@angular/core';
import {ChatGroup, User} from "../../../../Models";
import {ActivatedRoute} from "@angular/router";
import {HttpErrorResponse} from "@angular/common/http";
import {ChatGroupUserHttpService} from "../../../../services/http/chat-group-user-http.service";
import {CategoryNewModalComponent} from "../../category/category-new-modal/category-new-modal.component";
import {ChatGroupUserNewComponent} from "../chat-group-user-new/chat-group-user-new.component";

@Component({
  selector: 'chat-group-user-list',
  templateUrl: './chat-group-user-list.component.html',
  styleUrls: ['./chat-group-user-list.component.css']
})
export class ChatGroupUserListComponent implements OnInit {

    chatGroupId: number;
    chatGroup : ChatGroup;
    users: Array<User> = [];
    pagination = {
        page: 1,
        totalItems: 0,
        itemsPerPage: 10
    };

    @ViewChild(ChatGroupUserNewComponent) chatGroupUserNewNewModal: ChatGroupUserNewComponent;


    constructor(private route: ActivatedRoute,
                private chatGroupUserHttp: ChatGroupUserHttpService){
    }

    ngOnInit() {
        this.route.params.subscribe(params => {
            this.chatGroupId = params.chat_group;
            this.getUsers();
        });
    }


    getUsers(){
        this.chatGroupUserHttp.list(this.chatGroupId, {page: this.pagination.page})
            .subscribe(response => {
                this.chatGroup = response.data.chat_group;
                this.users = response.data.users;
                this.pagination.totalItems = response.meta.total;
                this.pagination.itemsPerPage = response.meta.per_page;
            });
    }

    pageChanged(page){
        this.pagination.page = page;
        this.getUsers();
    }

    onInsertError($event: HttpErrorResponse) {
        console.log($event);
    }


    onInsertSucess($event: ChatGroup) {
        this.getUsers();
    }
}
