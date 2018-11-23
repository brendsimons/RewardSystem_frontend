import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShopComponent } from './shop/shop.component';
import { OpdrachtenIngevenComponent } from './opdrachten-ingeven/opdrachten-ingeven.component';
import { RewardsIngevenComponent } from './rewards-ingeven/rewards-ingeven.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { RewardClaimsComponent } from './reward-claims/reward-claims.component';
import { RankingsComponent } from './rankings/rankings.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'shop', component: ShopComponent, canActivate: [AuthGuard] },
  { path: 'opdrachtenIngeven', component: OpdrachtenIngevenComponent, canActivate: [AuthGuard] },
  { path: 'rewardClaims', component: RewardClaimsComponent },
  { path: 'rewardIngeven', component: RewardsIngevenComponent, canActivate: [AuthGuard] },
  { path: 'rankings', component: RankingsComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  // Homepage doorverwijzen naar dashboard
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  // Niet gedefinieerde routes ook doorverwijzen. Zoniet krijg je fouten in de console!
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
