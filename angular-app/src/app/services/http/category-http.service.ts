import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Category} from "../../Models";
import {urlApi} from "../../app.params";


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

  get(){

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

  update(id: number){
      const token = window.localStorage.getItem('token');
      return this.http.get<{data: any}>(`${this.url}/${id}`, {
          headers: {
              'Authorization': `Bearer ${token}`
          }
      })
  }

  destroy(){

  }
}
