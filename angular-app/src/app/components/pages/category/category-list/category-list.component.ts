import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {CategoryNewModalComponent} from "../category-new-modal/category-new-modal.component";
import {CategoryEditModalComponent} from "../category-edit-modal/category-edit-modal.component";
import {CategoryDeleteModalComponent} from "../category-delete-modal/category-delete-modal.component";
import {CategoryHttpService} from "../../../../services/http/category-http.service";
import {Category} from "../../../../Models";
import {NotifyMessageService} from "../../../../services/notify-message.service";

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
              private notifyMessage: NotifyMessageService) {

  }

    ngOnInit() {
        this.getCategories();
    }

    getCategories(){
        this.categoryHttp.list()
            .subscribe(response => this.categories = response.data);
    }

    showModalinsert(){
        this.categoryNewModal.showModal();
    }

    showModalEdit(categoryId: number){
        this.categoryId = categoryId;
        this.categoryEditModal.showModal();
    }

    showModalDelete(categoryId: number){
        this.categoryId = categoryId;
        this.categoryDeleteModal.showModal();
    }

    onInsertError($event: HttpErrorResponse) {
        console.log($event);
    }

    onInsertSucess($event: any) {
        this.notifyMessage.success('Categoria cadastrada com sucesso!');
        this.getCategories();
    }

    onEditError($event: HttpErrorResponse) {
        console.log($event);
    }

    onEditSucess($event: any) {
        this.notifyMessage.success('Categoria alterada com sucesso!');
        this.getCategories();
    }

    onDeleteError($event: HttpErrorResponse) {
      if($event.status == 400){
          this.notifyMessage.error('Não foi possível excluir a categoria! ' +
              'verifique se a mesma não está relacionada com produtos');
      }
        
    }

    onDeleteSucess($event: any) {
        this.getCategories();
    }
}
