import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

//singleton

@Injectable({
  providedIn: 'root'
})
export class CategoryHttpService {


  constructor(private http: HttpClient) {

  }

  list(){
      const token = window.localStorage.getItem('token');
      // this.http.get<{data: Array<any>}>('http://localhost:8000/api/categories', { *****exemplo
     return this.http.get<{data: Array<{id: number, name: string, active: boolean, created_at: {date: string}}>}>
      ('http://localhost:8000/api/categories', {
          headers:{
              'Authorization': `Bearer ${token}`
          }
      })
  }

  get(){

  }

  create(){

  }

  update(){

  }

  destroy(){

  }
}
