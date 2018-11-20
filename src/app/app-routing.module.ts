import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShopComponent } from './shop/shop.component';
import { OpdrachtenIngevenComponent } from './opdrachten-ingeven/opdrachten-ingeven.component';
import { RewardsIngevenComponent } from './rewards-ingeven/rewards-ingeven.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import {RewardsComponent} from './rewards/rewards.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'shop', component: ShopComponent, canActivate: [AuthGuard] },
  { path: 'opdrachtenIngeven', component: OpdrachtenIngevenComponent, canActivate: [AuthGuard] },
    { path: 'rewards', component: RewardsComponent },
  { path: 'rewardsIngeven', component: RewardsIngevenComponent, canActivate: [AuthGuard] },
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
