import { Injectable } from '@angular/core';
import {ProductCategory} from "../../Models";
import {Observable} from "rxjs/internal/Observable";
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";
import {environment} from "../../../environments/environment";

@Injectable({
  providedIn: 'root'
})

export class ProductCategoryHttpService {

  private url : string = `${environment.api.url}/products/`;

  constructor(private http:  HttpClient) { }

  list(productid: number): Observable<ProductCategory> {
      return this.http
          .get<{ data: ProductCategory}>
          (this.getBaseUrl(productid)
          )
          .pipe(
              map(response => response.data)
          )
      }


  create(productid: number, categoriesid: number[]): Observable<ProductCategory>{
      return this.http
          .post<{ data: ProductCategory}>
          (this.getBaseUrl(productid), {categories: categoriesid}
          )
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
