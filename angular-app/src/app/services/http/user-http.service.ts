import { Injectable } from '@angular/core';
import {User} from "../../Models";
import {urlApi} from "../../app.params";
import {HttpClient, HttpParams} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs/internal/Observable";

@Injectable({
  providedIn: 'root'
})
export class UserHttpService {
    
  private url : string = urlApi + 'users';

    constructor(private http: HttpClient) {

    }

    list(page: number): Observable<{data: Array<User>, meta: any}>{
        const token = window.localStorage.getItem('token');

        const params = new HttpParams({
            fromObject:{
                page: page + ""
            }
        });

        return this.http
            .get<{data: Array<User>, meta: any}>
            (`${this.url}`, {
                params,
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            })
    }

    get(id: number): Observable<User>{
        const token = window.localStorage.getItem('token');
        return this.http
            .get<{ data: User }>
            (`${this.url}/${id}`, {
                headers:{
                    'Authorization': `Bearer ${token}`
                }
            })
            .pipe(
                map(response => response.data)
            )
    }

    create(user: User): Observable<User>{
        const token = window.localStorage.getItem('token');
        return this.http.post<{data: User}>
        (this.url, user, {
            headers:{
                'Authorization': `Bearer ${token}`
            }
        })
            .pipe(
                map(response => response.data)
            )
    }

    update(id: number, user: User): Observable<User>{
        const token = window.localStorage.getItem('token');
        return this.http
            .put<{ data: User }>(`${this.url}/${id}`, user, {
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
