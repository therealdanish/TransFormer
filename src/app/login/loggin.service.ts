import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders, HttpErrorResponse} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError} from'rxjs/operators';
// import { JwtHelperService } from '@auth0/angular-jwt';
import { JwPaginationComponent } from 'jw-angular-pagination';

@Injectable({
  providedIn: 'root'
})
export class LogginService {

  constructor(private http:HttpClient
             ) { }

h;
j;

login(a,b): Observable<string>{

  this.h='http://183.82.112.181:3397/Login?UserName='
  this.j= this.h + a +'&Password=' + b;

  return this.http.get<string>(this.j, {headers: new HttpHeaders().set('Authorization', 'Basic '+ btoa('admin:admin@123'))}).pipe(

    catchError(this.handleError)
    
  ); 
}
//  isAuthenticated(): boolean {
//   const token = localStorage.getItem('CurrentUser');
//   // Check whether the token is expired and return
//   // true or false
//   return !this.jwtHelper.isTokenExpired(token);
// }
lg(){
  localStorage.removeItem('CurrentUser');
}
handleError(error: HttpErrorResponse){
  console.log(error.error);
  return JSON.stringify(error.error);
  }
}
