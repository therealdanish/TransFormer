import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { BrowserModule } from "@angular/platform-browser";
import { Routes, RouterModule, CanActivate } from "@angular/router";

import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import { LoginComponent } from './login/login.component';
import { GfoGuard } from './login/gfo.guard';
import { LlgGuard } from './login/llg.guard';

const routes: Routes = [
  {
    path: "", 
    redirectTo: "login",
    pathMatch: "full",
    canActivate:[GfoGuard]
  },
  {
    path: "login",
    component: LoginComponent,
    pathMatch: "full",
    canActivate:[LlgGuard]
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
    path: '',
    component: AuthLayoutComponent,
    canActivate:[GfoGuard],
    children: [
      {
        path: '',
        loadChildren: './layouts/auth-layout/auth-layout.module#AuthLayoutModule',
        canActivate:[GfoGuard],
      }
    ]
  },
  {
    path: "**",
    redirectTo: "dashboard",
    canActivate:[GfoGuard]
  }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
