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
          (`${this.url}${productid}/categories`, {
              headers: {
                  'Authorization': `Bearer ${token}`
              }
          })
          .pipe(
              map(response => response.data)
          )
      }
  }
