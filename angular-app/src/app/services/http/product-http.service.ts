import { Injectable } from '@angular/core';
import {Product} from "../../Models";
import {urlApi} from "../../app.params";
import {HttpClient, HttpParams} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs/internal/Observable";
import {HttpResource} from "./http-resource";

@Injectable({
  providedIn: 'root'
})
export class ProductHttpService implements HttpResource<Product>{

    private url : string = urlApi + 'products';

    constructor(private http: HttpClient) {

    }

    list(page: number): Observable<{data: Array<Product>, meta: any}>{
        const token = window.localStorage.getItem('token');

        const params = new HttpParams({
            fromObject:{
                page: page + ""
            }
        });

        return this.http
            .get<{data: Array<Product>, meta: any}>
            (`${this.url}`, {
                params,
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            })
    }

    get(id: number): Observable<Product>{
        const token = window.localStorage.getItem('token');
        return this.http
            .get<{ data: Product }>
            (`${this.url}/${id}`, {
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            })
            .pipe(
                map(response => response.data)
            )
    }

    create(data: Product): Observable<Product>{
        const token = window.localStorage.getItem('token');
        return this.http.post<{data: Product}>
        (this.url, data, {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
            .pipe(
                map(response => response.data)
            )
    }

    update(id: number, data: Product): Observable<Product>{
        const token = window.localStorage.getItem('token');
        return this.http
            .put<{ data: Product }>(`${this.url}/${id}`, data, {
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