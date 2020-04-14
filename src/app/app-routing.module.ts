import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule, CanActivate } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './login/login.component';
import { GfoGuard } from './login/gfo.guard';
import { LlgGuard } from './login/llg.guard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  {
    path: "", 
    redirectTo: "login",
    pathMatch: "full",
   
  },
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    component: AdminLayoutComponent,
   canActivate:[GfoGuard],
    children: [
      {
        path: "",
        loadChildren:
          "./layouts/admin-layout/admin-layout.module#AdminLayoutModule",
          canActivate:[GfoGuard]
      
      }
    ]
  }, 
    
  {
    path: "**",
    redirectTo:'login'
    
  }
];
export const appRouting = RouterModule.forRoot(routes);
@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],

})

export class AppRoutingModule {}
