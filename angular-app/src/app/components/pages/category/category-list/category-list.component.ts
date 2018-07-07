import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {CategoryNewModalComponent} from "../category-new-modal/category-new-modal.component";
import {CategoryEditModalComponent} from "../category-edit-modal/category-edit-modal.component";
import {CategoryDeleteModalComponent} from "../category-delete-modal/category-delete-modal.component";

declare let $;

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories : Array<{id: number, name: string, active: boolean, created_at: {date: string}}> = [];

  @ViewChild(CategoryNewModalComponent) categoryNewModal: CategoryNewModalComponent;
  @ViewChild(CategoryEditModalComponent) categoryEditModal: CategoryEditModalComponent;
  @ViewChild(CategoryDeleteModalComponent) categoryDeleteModal: CategoryDeleteModalComponent;

  categoryId: number;

  constructor(private http: HttpClient) {

  }

    ngOnInit() {
        this.getCategories();
    }

    getCategories(){
        const token = window.localStorage.getItem('token');
        // this.http.get<{data: Array<any>}>('http://localhost:8000/api/categories', { *****exemplo
        this.http.get<{data: Array<{id: number, name: string, active: boolean, created_at: {date: string}}>}>
        ('http://localhost:8000/api/categories', {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
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
        this.getCategories();
    }

    onEditError($event: HttpErrorResponse) {
        console.log($event);
    }

    onEditSucess($event: any) {
        this.getCategories();
    }

    onDeleteError($event: HttpErrorResponse) {
        console.log($event);
    }

    onDeleteSucess($event: any) {
        this.getCategories();
    }

}
