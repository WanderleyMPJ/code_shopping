import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
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

  list(): Observable<{data: Array<Category>}>{
      const token = window.localStorage.getItem('token');
      return this.http.get<{data: Array<Category>}>
      (`${this.url}`, {
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

  create(category: Category): Observable<{data: Array<Category>}>{
      const token = window.localStorage.getItem('token');
      return this.http.post<{data: Array<Category>}>
        (`${this.url}`, category, {
          headers:{
              'Authorization': `Bearer ${token}`
          }
      })
  }

  update(id: number, _category: Category): Observable<{data: Category}>{
      const token = window.localStorage.getItem('token');
      return this.http.put<{data: Category}>(`${this.url}/${id}`, _category, {
          headers: {
              'Authorization': `Bearer ${token}`
          }
      })
  }

  destroy(){

  }
}
