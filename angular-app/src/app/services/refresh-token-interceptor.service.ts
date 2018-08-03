import { Injectable } from '@angular/core';
import {
    HttpErrorResponse,

    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse
} from "@angular/common/http";
import {Observable} from "rxjs";
import {tap} from "rxjs/operators";
import {AuthService} from "./auth.service";
import {Router} from "@angular/router";

@Injectable({
  providedIn: 'root'
})
export class RefreshTokenInterceptorService implements HttpInterceptor{

  constructor(private authService: AuthService, private router: Router) {

  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<any>{
    return next
        .handle(req)
        .pipe(
          tap( (event: HttpEvent<any>) => {
            console.log(event);
            this.setNewTokenIfResponseValid(event);
          }, (eventError: HttpEvent<any>) => {
                this.redirectToLoginIfUnauthenticated(eventError)
          })
        )
  }

  private redirectToLoginIfUnauthenticated(eventError: HttpEvent<any>){
    if(eventError instanceof HttpErrorResponse && eventError.status == 401){
        this.authService.setToken(null);
        this.router.navigate(['login']);
    }

  }

  private setNewTokenIfResponseValid(event: HttpEvent<any>){
    if(event instanceof HttpResponse){
      const authorizationHeader = event.headers.get('authorization');
      if(authorizationHeader){
          const token = authorizationHeader.split(' ')[1]; //fragmenta a string com o separador com espaço
          this.authService.setToken(token);
      }
    }
}
}
