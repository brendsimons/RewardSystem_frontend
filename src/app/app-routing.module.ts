import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShopComponent } from './shop/shop.component';
import { TasksComponent } from './tasks/tasks.component';
import { RewardsIngevenComponent } from './rewards-ingeven/rewards-ingeven.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { RewardClaimsComponent } from './reward-claims/reward-claims.component';
import { RankingsComponent } from './rankings/rankings.component';
import { RewardsAanpassenComponent } from './rewards-aanpassen/rewards-aanpassen.component';
import {ChangestatusComponent} from './reward-claims/changestatus/changestatus.component';
import {EditTasksComponent} from './edit-tasks/edit-tasks.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: 'shop', component: ShopComponent, canActivate: [AuthGuard] },
  { path: 'rewardClaims', component: RewardClaimsComponent, canActivate: [AuthGuard] },
  { path: 'tasks', component: TasksComponent, canActivate: [AuthGuard] },
  { path: 'rewardIngeven', component: RewardsIngevenComponent, canActivate: [AuthGuard] },
  { path: 'rankings', component: RankingsComponent, canActivate: [AuthGuard] },
  { path: 'rewardAanpassen/:id', component: RewardsAanpassenComponent, canActivate: [AuthGuard] },
  { path: 'editTasks/:id', component: EditTasksComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
    { path: 'rewardClaimWijzigen/:id', component: ChangestatusComponent, canActivate: [AuthGuard]},
  // Homepage doorverwijzen naar dashboard
  { path: '', redirectTo: 'dashboard', pathMatch: 'full', canActivate: [AuthGuard] },
  // Niet gedefinieerde routes ook doorverwijzen. Zoniet krijg je fouten in de console!
  { path: '**', redirectTo: 'dashboard' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
