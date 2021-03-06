import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgBootstrapModule } from './sharedModules/ng-bootstrap.module';
import { NavbarComponent } from './navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../material-module';
import { DashboardModule } from './dashboard/dashboard.module';
import { ShopModule } from './shop/shop.module';
import { TasksModule } from './tasks/tasks.module';
import { RewardsIngevenModule } from './rewards-ingeven/rewards-ingeven.module';
import { LoginModule } from './login/login.module';
import { JwtInterceptor } from './services/jwt.interceptor';
import { RewardClaimsModule } from './reward-claims/reward-claims.module';
import { TaskClaimsModule } from './task-claims/task-claims.module';
import { FooterComponent } from './components/footer/footer.component';
import { RankingsModule } from './rankings/rankings.module';
import { RewardsAanpassenModule } from './rewards-aanpassen/rewards-aanpassen.module';
import {MatMenuModule} from '@angular/material';
import { EditTasksModule } from './edit-tasks/edit-tasks.module';
import { CheckTasksModule } from './check-tasks/check-tasks.module';

export function jwtTokenGetter() {
  return localStorage.getItem('access_token');
}

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgBootstrapModule,
    MatMenuModule,
    BrowserAnimationsModule,
    MaterialModule,
    DashboardModule,
    ShopModule,
    TasksModule,
    RewardsIngevenModule,
    LoginModule,
    HttpClientModule,
    RankingsModule,
    RewardClaimsModule,
    TaskClaimsModule,
    RewardsAanpassenModule,

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
    }),

    EditTasksModule,

    CheckTasksModule,
  ],

  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
