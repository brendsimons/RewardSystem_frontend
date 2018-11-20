import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgBootstrapModule} from './sharedModules/ng-bootstrap.module';
import { NavbarComponent } from './navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../material-module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ShopModule } from './shop/shop.module';
import { OpdrachtenIngevenModule } from './opdrachten-ingeven/opdrachten-ingeven.module';
import { RewardsIngevenModule } from './rewards-ingeven/rewards-ingeven.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      NgBootstrapModule,
      BrowserAnimationsModule,
      MaterialModule,
      DashboardModule,
      ShopModule,
      OpdrachtenIngevenModule,
      RewardsIngevenModule,
      LoginModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
