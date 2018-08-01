import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Category} from "../../Models";
import {urlApi} from "../../app.params";
import {map} from "rxjs/operators";
import {SearchParams, SearchParamsBuilder, HttpResource} from "./http-resource";
import {AuthService} from "../auth.service";


//singleton

@Injectable({
  providedIn: 'root'
})
export class CategoryHttpService {

  private url : string = urlApi + 'categories';

  constructor(private http: HttpClient, private authService: AuthService) {

  }

  list(searchParams: SearchParams): Observable<{data: Array<Category>, meta: any}>{
      const sParams = new SearchParamsBuilder(searchParams).makeObject();
      const params = new HttpParams({
          fromObject: (<any>sParams)
      });
      return this.http
          .get<{data: Array<Category>, meta: any}>
            (`${this.url}`, {params});
  }

  get(id: number): Observable<Category>{
      return this.http
          .get<{ data: Category }>
            (`${this.url}/${id}`)
          .pipe(
              map(response => response.data)
          )
  }

  create(category: Category): Observable<Category>{
      return this.http
          .post<{data: Category}>
        (this.url, category)
          .pipe(
              map(response => response.data)
          )
  }

  update(id: number, category: Category): Observable<Category>{
      return this.http
          .put<{ data: Category }>(`${this.url}/${id}`, category)
          .pipe(
              map(response => response.data)
          )
  }

  destroy(id: number): Observable<any>{
      return this.http
          .delete
          (`${this.url}/${id}`)
  }
}
