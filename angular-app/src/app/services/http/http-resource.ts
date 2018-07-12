import {Observable} from "rxjs/internal/Observable";

export interface SearchParams{
    page?: number;
    all?: any;
}

 export interface HttpResource<T> {

     list(searchParams: SearchParams): Observable<{data: Array<T>, meta: any}>;

     get(id: number): Observable<T>;

     create(data: T): Observable<T>;

     update(id: number, data: T): Observable<T>;

     destroy(id: number): Observable<any>;
 }

// abstract class HttpBase<T> implements HttpResource<T>{
//
//     abstract baseUrl();
//
//     create(data: T): Observable<T> {
//         return undefined;
//     }
//
//     destroy(id: number): Observable<any> {
//         return undefined;
//     }
//
//     get(id: number): Observable<T> {
//         return undefined;
//     }
//
//     list(page: number): Observable<{ data: Array<T>; meta: any }> {
//         return undefined;
//     }

//     update(id: number, data: T): Observable<T> {
//         return undefined;
//     }
//
// }
