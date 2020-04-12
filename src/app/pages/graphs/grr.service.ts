import { Injectable } from '@angular/core';
import {HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GrrService {

  constructor(private h:HttpClient) { }

a =[]
ha:string;
ty:string;

getit(a:string, b:string, c:string, d:string): Observable<any[]>{

this.ty= 'http://183.82.112.181:3402/Transformer/';
this.ha= this.ty+ a +'/all/'+ b +'/'+ c +'/'+d;

return this.h.get<any[]>(this.ha,{headers: new HttpHeaders().set('Authorization', 'Basic '+ btoa('admin:admin@123'))});  
}





}
