import { Component, OnInit, ViewChild } from '@angular/core';
<<<<<<< HEAD
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {CategoryNewModalComponent} from "../category-new-modal/category-new-modal.component";
import {Router} from "@angular/router";
=======
import {HttpClient} from "@angular/common/http";
import {CategoryNewModalComponent} from "../category-new-modal/category-new-modal.component";
>>>>>>> c1e6900706a07923a88a7961e2838fdabf045487


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

<<<<<<< HEAD
<<<<<<< HEAD
=======
  submit(){
      const token = window.localStorage.getItem('token');
    this.http.post('http://localhost:8000/api/categories', this.category, {
        headers:{
          'Authorization': `Bearer ${token}`
        }
      })
        .subscribe((category) => {
            console.log(category);
            this.getCategories();
            $('#exampleModal').modal('hide')
        });
  }

>>>>>>> parent of ad8a8e7... Usando novo modal no cadastro de categorias
=======
>>>>>>> c1e6900706a07923a88a7961e2838fdabf045487
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

<<<<<<< HEAD
    onInsertSucess($event: any) {
        this.getCategories();
    }

    onInsertError($event: HttpErrorResponse) {
        console.log($event);
    }
=======
>>>>>>> c1e6900706a07923a88a7961e2838fdabf045487
}
