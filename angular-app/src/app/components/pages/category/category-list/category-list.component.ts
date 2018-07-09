import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpErrorResponse} from "@angular/common/http";
import {CategoryNewModalComponent} from "../category-new-modal/category-new-modal.component";
import {CategoryEditModalComponent} from "../category-edit-modal/category-edit-modal.component";
import {CategoryDeleteModalComponent} from "../category-delete-modal/category-delete-modal.component";
import {CategoryHttpService} from "../../../../services/http/category-http.service";
import {Category} from "../../../../Models";
import {NotifyMessageService} from "../../../../services/notify-message.service";
import {CategoryInsertServices} from "./category-insert.services";
import {CategoryEditServices} from "./category-edit.services";
import {CategoryDeleteServices} from "./category-delete.services";


declare let $;

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})

export class CategoryListComponent implements OnInit {

  categories : Array<Category> = [];

  @ViewChild(CategoryNewModalComponent) categoryNewModal: CategoryNewModalComponent;
  @ViewChild(CategoryEditModalComponent) categoryEditModal: CategoryEditModalComponent;
  @ViewChild(CategoryDeleteModalComponent) categoryDeleteModal: CategoryDeleteModalComponent;

  categoryId: number;

  constructor(private categoryHttp: CategoryHttpService,
              private notifyMessage: NotifyMessageService,
              protected categoryInsertServices: CategoryInsertServices,
              protected categoryEditServices: CategoryEditServices,
              protected categoryDeleteServices: CategoryDeleteServices){
        this.categoryInsertServices.categoryListComonente = this;
        this.categoryEditServices.categoryListComonente = this;
        this.categoryDeleteServices.categoryListComonente = this;
  }

    ngOnInit() {
        this.getCategories();
    }

    getCategories(){
        this.categoryHttp.list()
            .subscribe(response => this.categories = response.data);
    }




}
