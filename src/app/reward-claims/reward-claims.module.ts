import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RewardClaimsComponent } from './reward-claims.component';
import { MaterialModule } from '../../material-module';
import { ClaimTableComponent } from './claim-table/claim-table.component';
import { FinishedClaimsTableComponent } from './finished-claims-table/finished-claims-table.component';
import { RewardChangestatusComponent } from './reward-changestatus/reward-changestatus.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [RewardClaimsComponent, ClaimTableComponent, FinishedClaimsTableComponent, RewardChangestatusComponent]
})
export class RewardClaimsModule { }
