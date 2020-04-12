import { Routes } from "@angular/router";

import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { HistoryComponent } from "../../pages/history/history.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import{ TransformerComponent } from  "../../pages/transformer/transformer.component";
import { GraphsComponent } from 'src/app/pages/graphs/graphs.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ReportsComponent } from 'src/app/pages/reports/reports.component';
import { MapsComponent } from 'src/app/pages/maps/maps.component';
import { DetailComponent } from 'src/app/pages/transformer/detail/detail.component';
// import { RtlComponent } from "../../pages/rtl/rtl.component";

export const AdminLayoutRoutes: Routes = [
  // { path: "dashboard", component: DashboardComponent },
  // { path: "icons", component: IconsComponent },
  // { path: "maps", component: MapComponent },
  // { path: "notifications", component: NotificationsComponent },
  // { path: "user", component: UserComponent },
  // { path: "tables", component: TablesComponent },
  // { path: "typography", component: TypographyComponent },
  { path: "lol", component: DashboardComponent},
  { path: "history", component: HistoryComponent},
  { path:"graphs", component: GraphsComponent},
  { path:"reports",component: ReportsComponent },
  { path: "dashboard", component:HomeComponent } ,
  { path: "maps", component:MapsComponent },
  { path:"transformer/detail", component:DetailComponent}
  // { path: "rtl", component: RtlComponent }
];
