import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  

FetchCVData(): Observable<{}>{
console.log("Connecting For Current Values");
return this.http.get<{}>('http://183.82.112.181:3402/Transformer/CurrentVoltage/868997035786613/latest',{headers: new HttpHeaders().set('Authorization', 'Basic '+ btoa('admin:admin@123'))});
}

FetchPData(): Observable<{}>{
  console.log("Connecting For Power Values");
  
  return this.http.get<{}>('http://183.82.112.181:3402/Transformer/Power/868997035786613/latest',{headers: new HttpHeaders().set('Authorization', 'Basic '+ btoa('admin:admin@123'))});
}
      
FetchPFData(): Observable<{}>{
  console.log("Connecting For Power Factor Values ");
  return this.http.get<{}>('http://183.82.112.181:3402/Transformer/PowerFactor/868997035786613/latest',{headers: new HttpHeaders().set('Authorization', 'Basic '+ btoa('admin:admin@123'))});
}

FetchOData(): Observable<{}>{
  console.log("Connecting For Overview Values");
  return this.http.get<{}>('http://183.82.112.181:3402/Transformer/overview/868997035786613/latest',{headers: new HttpHeaders().set('Authorization', 'Basic '+ btoa('admin:admin@123'))});
}

FetchTPData(): Observable<{}>{
  console.log("Connecting For Total Power Values");
  return this.http.get<{}>('http://183.82.112.181:3402/Transformer/TotalPower/868997035786613/latest',{headers: new HttpHeaders().set('Authorization', 'Basic '+ btoa('admin:admin@123'))});
}

FetchMONTH(a:string): string{

  
    return "January";
  }
}

    
    
      

   
   

