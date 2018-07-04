import { Component, OnInit, ViewChild } from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {CategoryNewModalComponent} from "../category-new-modal/category-new-modal.component";
import {Router} from "@angular/router";


declare let $;

@Component({
  selector: 'category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories : Array<{id: number, name: string, active: boolean, created_at: {date: string}}> = [];

  @ViewChild(CategoryNewModalComponent)
  categoryNewModal: CategoryNewModalComponent;

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

    onInsertSucess($event: any) {
        this.getCategories();
    }

    onInsertError($event: HttpErrorResponse) {
        console.log($event);
    }
}
