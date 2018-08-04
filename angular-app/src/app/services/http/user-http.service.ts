import { Injectable } from '@angular/core';
import {User} from "../../Models";
import {HttpClient, HttpParams} from "@angular/common/http";
import {map} from "rxjs/operators";
import {Observable} from "rxjs/internal/Observable";
import {SearchParams, SearchParamsBuilder} from "./http-resource";
import {environment} from "../../../environments/environment";


@Injectable({
  providedIn: 'root'
})
export class UserHttpService {

    private url : string = `${environment.api.url}/users`;

    constructor(private http: HttpClient) {

    }

    list(searchParams: SearchParams): Observable<{data: Array<User>, meta: any}>{
        const sParams = new SearchParamsBuilder(searchParams).makeObject();
        const params = new HttpParams({
            fromObject: (<any>sParams)
        });
        return this.http
            .get<{data: Array<User>, meta: any}>
            (`${this.url}`)
    }

    get(id: number): Observable<User>{
        return this.http
            .get<{ data: User }>
            (`${this.url}/${id}`)
            .pipe(
                map(response => response.data)
            )
    }

    create(user: User): Observable<User>{
        return this.http.post<{data: User}>
        (this.url, user)
            .pipe(
                map(response => response.data)
            )
    }

    update(id: number, user: User): Observable<User>{
        return this.http
            .put<{ data: User }>(`${this.url}/${id}`, user
            )
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
