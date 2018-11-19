import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ShopComponent} from "./shop/shop.component";
import {OpdrachtenIngevenComponent} from "./opdrachten-ingeven/opdrachten-ingeven.component";
import {RewardsIngevenComponent} from "./rewards-ingeven/rewards-ingeven.component";

const routes: Routes = [
    {path: 'dashboard', component: DashboardComponent},
    {path: 'shop', component: ShopComponent},
    {path: 'opdrachtenIngeven', component: OpdrachtenIngevenComponent},
    {path: 'rewardsIngeven', component: RewardsIngevenComponent},
    // Homepage doorverwijzen naar todo
    {path: '', redirectTo: 'dashboard', pathMatch: 'full'},
    // Niet gedefinieerde routes ook doorverwijzen. Zoniet krijg je fouten in de console!
    {path: '**', redirectTo: 'dashboard'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
