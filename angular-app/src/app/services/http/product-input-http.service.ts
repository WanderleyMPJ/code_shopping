import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {SearchParams, SearchParamsBuilder} from "./http-resource";
import {Observable} from "rxjs/internal/Observable";
import {ProductInput} from "../../Models";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductInputHttpService {

    private baseUrl : string = `${environment.api.url}/inputs`;

    constructor(private http: HttpClient) {

    }

    list(searchParams: SearchParams): Observable<{data: Array<ProductInput>, meta: any}>{
        const sParams = new SearchParamsBuilder(searchParams).makeObject();
        const params = new HttpParams({
            fromObject: (<any>sParams)
        });
        return this.http
            .get<{data: Array<ProductInput>, meta: any}>
            (`${this.baseUrl}`, {params});
    }

    get(id: number): Observable<ProductInput>{
        return this.http
            .get<{ data: ProductInput }>
            (`${this.baseUrl}/${id}`)
            .pipe(
                map(response => response.data)
            )
    }

    create(data: {amount: number, product_id: number}): Observable<ProductInput>{
        return this.http
            .post<{data: ProductInput}>
            (this.baseUrl, data)
            .pipe(
                map(response => response.data)
            );
    }

}
