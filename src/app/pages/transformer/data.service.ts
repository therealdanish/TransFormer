import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) {}

  

FetchCVData(): Observable<{}>{
console.log("Connecting For Current Values");
return this.http.get<{}>('http://183.82.112.181:3402/Trans/CurrentVoltage/868997035786233/latest');
}

FetchPData(): Observable<{}>{
  console.log("Connecting For Power Values");
  
  return this.http.get<{}>('http://183.82.112.181:3402/Trans/Power/868997035786233/latest');
}
      
FetchPFData(): Observable<{}>{
  console.log("Connecting For Power Factor Values ");
  return this.http.get<{}>('http://183.82.112.181:3402/Trans/PowerFactor/868997035786233/latest');
}

FetchOData(): Observable<{}>{
  console.log("Connecting For Overview Values");
  return this.http.get<{}>('http://183.82.112.181:3402/Trans/overview/868997035786233/latest');
}

FetchTPData(): Observable<{}>{
  console.log("Connecting For Total Power Values");
  return this.http.get<{}>('http://183.82.112.181:3402/Trans/TotalPower/868997035786233/latest');
}

FetchMONTH(a:string): string{

  
    return "January";
  }
}

    
    
      

   
   

