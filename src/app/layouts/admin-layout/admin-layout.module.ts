import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { AdminLayoutRoutes } from "./admin-layout.routing";
import { DashboardComponent } from "../../pages/dashboard/dashboard.component";
import { IconsComponent } from "../../pages/icons/icons.component";
import { HistoryComponent } from "../../pages/history/history.component";
import { NotificationsComponent } from "../../pages/notifications/notifications.component";
import { UserComponent } from "../../pages/user/user.component";
import { TablesComponent } from "../../pages/tables/tables.component";
import { TypographyComponent } from "../../pages/typography/typography.component";
import { GraphsComponent } from 'src/app/pages/graphs/graphs.component';
import { HomeComponent } from 'src/app/pages/home/home.component';
import { ReportsComponent } from 'src/app/pages/reports/reports.component';
// import { RtlComponent } from "../../pages/rtl/rtl.component";
import {JwPaginationComponent} from 'jw-angular-pagination';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TransformerComponent } from 'src/app/pages/transformer/transformer.component';
import { MapsComponent } from 'src/app/pages/maps/maps.component';
import { DetailComponent } from 'src/app/pages/transformer/detail/detail.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    HttpClientModule,
    NgbModule,
  ],
  declarations: [
     DashboardComponent,
    // UserComponent,
    // TablesComponent,
    // IconsComponent,
    // TypographyComponent,
    // NotificationsComponent,
    JwPaginationComponent,
    DetailComponent,
    MapsComponent,
    HistoryComponent,
    GraphsComponent,
    ReportsComponent,
    HistoryComponent,
    TransformerComponent
    // RtlComponent
  ]
})
export class AdminLayoutModule {}
