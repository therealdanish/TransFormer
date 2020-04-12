import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import {DataService} from './pages/transformer/data.service';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { DetailComponent } from './pages/transformer/detail/detail.component';
import { from } from 'rxjs';
import { DattaService } from './pages/history/datta.service';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component'
// import { TransformerComponent } from './pages/transformer/transformer.component';
// import { HomeComponent } from './pages/home/home.component';
// import { GraphsComponent } from './pages/graphs/graphs.component';
// import { ReportsComponent } from './pages/reports/reports.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    RouterModule,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, LoginComponent],
  providers: [DataService, DattaService],
  bootstrap: [AppComponent]
})
export class AppModule {}
