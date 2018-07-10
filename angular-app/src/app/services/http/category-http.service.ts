import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Category} from "../../Models";
import {urlApi} from "../../app.params";
import {map} from "rxjs/operators";


//singleton

@Injectable({
  providedIn: 'root'
})
export class CategoryHttpService {

  private url : string = urlApi + 'categories';

  constructor(private http: HttpClient) {

  }

  list(page: number): Observable<{data: Array<Category>, meta: any}>{
      const token = window.localStorage.getItem('token');

      const params = new HttpParams({
          fromObject:{
              page: page + ""
          }
      });

      return this.http
          .get<{data: Array<Category>, meta: any}>
            (`${this.url}`, {
                    params,
                    headers:{
                        'Authorization': `Bearer ${token}`
                    }
            })
  }

  get(id: number): Observable<Category>{
      const token = window.localStorage.getItem('token');
      return this.http
          .get<{ data: Category }>
            (`${this.url}/${id}`, {
          headers:{
              'Authorization': `Bearer ${token}`
          }
      })
          .pipe(
              map(response => response.data)
          )
  }

  create(category: Category): Observable<Category>{
      const token = window.localStorage.getItem('token');
      return this.http.post<{data: Category}>
        (this.url, category, {
          headers:{
              'Authorization': `Bearer ${token}`
          }
      })
          .pipe(
              map(response => response.data)
          )
  }

  update(id: number, category: Category): Observable<Category>{
      const token = window.localStorage.getItem('token');
      return this.http
          .put<{ data: Category }>(`${this.url}/${id}`, category, {
          headers:{
              'Authorization': `Bearer ${token}`
          }
      })
          .pipe(
              map(response => response.data)
          )
  }

  destroy(id: number): Observable<any>{
      const token = window.localStorage.getItem('token');
      return this.http
          .delete
          (`${this.url}/${id}`, {
              headers:{
                  'Authorization': `Bearer ${token}`
              }
          })
  }
}