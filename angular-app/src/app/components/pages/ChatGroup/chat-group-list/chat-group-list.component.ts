import {Component, OnInit, ViewChild} from '@angular/core';
import {ChatGroup} from "../../../../Models";
import {NotifyMessageService} from "../../../../services/notify-message.service";
import {ChatGroupNewModalComponent} from "../chat-group-new-modal/chat-group-new-modal.component";
import {ChatGroupEditModalComponent} from "../chat-group-edit-modal/chat-group-edit-modal.component";
import {ChatGroupDeleteModalComponent} from "../chat-group-delete-modal/chat-group-delete-modal.component";
import {ChatGroupHttpService} from "../../../../services/http/chat-group-http.service";
import {ChatGroupInsertServices} from "./chat-group-insert.services";
import {ChatGroupEditServices} from "./chat-group-edit.services";
import {ChatGroupDeleteServices} from "./chat-group-delete.services";

@Component({
  selector: 'chat-group-list',
  templateUrl: './chat-group-list.component.html',
  styleUrls: ['./chat-group-list.component.css']
})
export class ChatGroupListComponent implements OnInit {

    chatGroups : Array<ChatGroup> = [];
    pagination = {
        page : 1,
        totalItems: 0,
        itemsPerPage: 15
    };
    sortColumn = {column: 'created_at', sort: 'desc'};
    ChatGroupId: number;
    searchText: string;

    @ViewChild(ChatGroupNewModalComponent)
    ChatGroupNewModal: ChatGroupNewModalComponent;

    @ViewChild(ChatGroupEditModalComponent)
    ChatGroupEditModal: ChatGroupEditModalComponent;

    @ViewChild(ChatGroupDeleteModalComponent)
    ChatGroupDeleteModal: ChatGroupDeleteModalComponent;

    constructor(private ChatGroupHttp: ChatGroupHttpService,
                private notifyMessage: NotifyMessageService,
                protected ChatGroupInsertServices: ChatGroupInsertServices,
                protected ChatGroupEditServices: ChatGroupEditServices,
                protected ChatGroupDeleteServices: ChatGroupDeleteServices){
        this.ChatGroupInsertServices.ChatGroupListComonente = this;
        this.ChatGroupEditServices.ChatGroupListComonente = this;
        this.ChatGroupDeleteServices.ChatGroupListComonente = this;
    }

    ngOnInit() {
        this.getChatGroups();
    }

    getChatGroups() {



        this.ChatGroupHttp.list({
            page: this.pagination.page,
            sort: this.sortColumn.column === ''? null: this.sortColumn,
            search : this.searchText
        })
            .subscribe(response => {
                this.chatGroups = response.data;
                this.pagination.totalItems = response.meta.total;
                this.pagination.itemsPerPage = response.meta.per_page;
            })

    }

    pageChanged(page){
        this.pagination.page = page;
        this.getChatGroups();
    }

    sort(sortColumn){
        this.getChatGroups();
    }

    search(search){ //este método search é chamado
        //e logo em seguida o getChatGroups mais abaixo
        this.searchText = search;
        this.getChatGroups();
    }


}
