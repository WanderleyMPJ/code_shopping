import { Injectable } from '@angular/core';
import {Product, ProductCategory} from "../../Models";
import {Observable} from "rxjs/internal/Observable";
import {HttpClient} from "@angular/common/http";
import {urlApi} from "../../app.params";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})

export class ProductCategoryHttpService {

  private url : string = urlApi + 'products/';

  constructor(private http:  HttpClient) { }

  list(productid: number): Observable<ProductCategory> {
      const token = window.localStorage.getItem('token');
      return this.http
          .get<{ data: ProductCategory}>
          (this.getBaseUrl(productid), {
              headers: {
                  'Authorization': `Bearer ${token}`
              }
          })
          .pipe(
              map(response => response.data)
          )
      }


  create(productid: number, categoriesid: number[]): Observable<ProductCategory>{
      const token = window.localStorage.getItem('token');
      return this.http
          .post<{ data: ProductCategory}>
          (this.getBaseUrl(productid), {categories: categoriesid},{
              headers: {
                  'Authorization': `Bearer ${token}`
              }
          })
          .pipe(
              map(response => response.data)
          )
  }

  private getBaseUrl(productid:number, categoryid:number = null): string{
      let baseUrl = `${this.url}${productid}/categories`;
      if(categoryid){
          baseUrl += `/${categoryid}`;
      }
      return baseUrl;
  }
}
