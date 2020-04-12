import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HttpHeaders} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DattaService {

  constructor(private http: HttpClient ){ }

f:string;
h:string;



//  const httpOptions={
//    headers:new HttpHeaders({
//       'Content-Type': 'application/json',
//       'Authorization': `Basic` + btoa("admin:admin@123" )
//    })
// };



getValues(a:string, b:string, c:string, d:string): Observable<any[]>{
  this.f= 'http://183.82.112.181:3402/Transformer/';
  
  this.h=this.f + a +'/all/'+ b +'/'+ c +'/'+d;  
  return this.http.get<any[]>(this.h,{headers: new HttpHeaders().set('Authorization', 'Basic '+ btoa('admin:admin@123'))});  

}




}
