import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { RouterModule } from "@angular/router";
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from "./app.component";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from './layouts/auth-layout/auth-layout.component';
import {DataService} from './pages/transformer/data.service';
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule, appRouting } from "./app-routing.module";
import { ComponentsModule } from "./components/components.module";
import { DetailComponent } from './pages/transformer/detail/detail.component';
import { from } from 'rxjs';
import { DattaService } from './pages/history/datta.service';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component'
import { LogginService } from './login/loggin.service';
import {GfoGuard} from './login/gfo.guard';
import { JwtHelperService} from '@auth0/angular-jwt';
import { LlgGuard } from './login/llg.guard';
// import { TransformerComponent } from './pages/transformer/transformer.component';
// import { HomeComponent } from './pages/home/home.component';
// import { GraphsComponent } from './pages/graphs/graphs.component';
// import { ReportsComponent } from './pages/reports/reports.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ComponentsModule,
    NgbModule,
    appRouting,
    AppRoutingModule,
    ToastrModule.forRoot()
  ],
  declarations: [AppComponent, AdminLayoutComponent, AuthLayoutComponent, LoginComponent],
  providers: [DataService, DattaService, LogginService,GfoGuard, JwtHelperService,LlgGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
