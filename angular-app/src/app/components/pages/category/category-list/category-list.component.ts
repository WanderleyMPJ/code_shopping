import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {

  categories = [];

  constructor(private http: HttpClient) {

  }

  ngOnInit() {
      this.http.get<Array<any>>('http://localhost:8000/api/categories', {
          headers:{
              'Authorization': `Bearer ${token}`
          }
      })
          .subscribe(data => this.categories = data);
  }

}
