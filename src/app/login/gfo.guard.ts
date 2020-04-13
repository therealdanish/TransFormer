import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class GfoGuard implements CanActivate {

  constructor(private router:Router){}

  i=true;
  g=false;
  canActivate(
    // next: ActivatedRouteSnapshot,
    // state: RouterStateSnapshot
    ): boolean {
       
   
        if(localStorage.getItem('CurrentUser')){
         
          return true;
        }
     this.router.navigate[('/#/login')]   
     return false ;
  }
  
}
