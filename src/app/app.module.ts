import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD

import { JwtModule } from '@auth0/angular-jwt';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgBootstrapModule } from "./sharedModules/ng-bootstrap.module";
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "../material-module";
=======
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgBootstrapModule} from './sharedModules/ng-bootstrap.module';
import { NavbarComponent } from './navbar/navbar.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from '../material-module';
>>>>>>> 91bf19b1c6c27727ab6c3e486eababab5a7e95a7
import { DashboardModule } from './dashboard/dashboard.module';
import { ShopModule } from './shop/shop.module';
import { OpdrachtenIngevenModule } from './opdrachten-ingeven/opdrachten-ingeven.module';
import { RewardsIngevenModule } from './rewards-ingeven/rewards-ingeven.module';
import { LoginModule } from './login/login.module';

export function jwtTokenGetter() {
  return localStorage.getItem('access_token');
}

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
    LoginModule,

    JwtModule.forRoot({
      config: {
        tokenGetter: jwtTokenGetter,
        whitelistedDomains: [
          'https://vpn.brendsimons.be'
        ],
        blacklistedRoutes: [
          'https://vpn.brendsimons.be/users/login',
          'https://vpn.brendsimons.be/users/register',
        ]
      }
    })
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
