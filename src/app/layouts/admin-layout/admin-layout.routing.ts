import { Routes } from "@angular/router";


import { HistoryComponent } from "../../pages/history/history.component";
import { UserComponent } from "../../pages/user/user.component";

import{ TransformerComponent } from  "../../pages/transformer/transformer.component";
import { GraphsComponent } from 'src/app/pages/graphs/graphs.component';
import { HomeComponent } from 'src/app/pages/home/home.component';

import { MapsComponent } from 'src/app/pages/maps/maps.component';
import { DetailComponent } from 'src/app/pages/transformer/detail/detail.component';
import {GfoGuard} from '../../login/gfo.guard';
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  // { path: "dashboard", component: DashboardComponent },
  // { path: "icons", component: IconsComponent },
  // { path: "maps", component: MapComponent },
  // { path: "notifications", component: NotificationsComponent },
  // { path: "user", component: UserComponent },
  // { path: "tables", component: TablesComponent },
  // { path: "typography", component: TypographyComponent },
  
  { path: "history", component: HistoryComponent,canActivate:[GfoGuard]},
  { path:"graphs", component: GraphsComponent,canActivate:[GfoGuard]},

  { path: "dashboard", component:HomeComponent,canActivate:[GfoGuard] } ,
  { path: "maps", component:MapsComponent,canActivate:[GfoGuard] },
  { path:"transformer/detail", component:DetailComponent,canActivate:[GfoGuard]}
  // { path: "rtl", component: RtlComponent }
];
