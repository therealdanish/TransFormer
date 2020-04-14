import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AdminLayoutRoutes } from "./admin-layout.routing";

import { HistoryComponent } from "../../pages/history/history.component";

import { UserComponent } from "../../pages/user/user.component";

import { GraphsComponent } from 'src/app/pages/graphs/graphs.component';
import { HomeComponent } from 'src/app/pages/home/home.component';

// import { RtlComponent } from "../../pages/rtl/rtl.component";
import {JwPaginationComponent} from 'jw-angular-pagination';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TransformerComponent } from 'src/app/pages/transformer/transformer.component';
import { MapsComponent } from 'src/app/pages/maps/maps.component';
import { DetailComponent } from 'src/app/pages/transformer/detail/detail.component';
import { AgmCoreModule}   from '@agm/core';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCclG7w5m1rAyb_KxV8cp2eY4FsTtTm7Bs'
    })
  ],
  declarations: [
   
     
    // UserComponent,
    // TablesComponent,
    // IconsComponent,
    // TypographyComponent,
    // NotificationsComponent,
    HomeComponent,
   
    DetailComponent,
    MapsComponent,
    HistoryComponent,
    GraphsComponent,
  
    HistoryComponent,
    TransformerComponent,
    JwPaginationComponent
    
    // RtlComponent
  ]
})
export class AdminLayoutModule {}
