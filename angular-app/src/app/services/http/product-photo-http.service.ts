import { Injectable } from '@angular/core';
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/internal/Observable";
import {Product, ProductPhoto} from "../../Models";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ProductPhotoHttpService {

    private baseApi : string = environment.api.url;

    constructor(private http: HttpClient) {

    }

    list(productId: number): Observable<{ product: Product, photos: ProductPhoto[]}>{
        return this.http
            .get<{ data: any}>(this.getBaseUrl(productId))
            .pipe(
                map(response => response.data)
            )
    }

    private getBaseUrl(productId: number, photoId: number = null): string{
      let baseUrl = `${this.baseApi}/products/${productId}/photos`;
      if (photoId){
        baseUrl += `/$(photoId}`;
      }
      return baseUrl;
    }
}
