import { Injectable } from '@angular/core';
import {Observable} from "rxjs/internal/Observable";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(user: {email:string, password:string}):Observable<{token: string}>{
    return this.http.post<{token: string}>('http://localhost:8000/api/login', user)
  }

}
