import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RewardsComponent } from './rewards.component';
import {MaterialModule} from '../../material-module';
import { ClaimTableComponent } from './claim-table/claim-table.component';

@NgModule({
  imports: [
    CommonModule,
      MaterialModule
  ],
  declarations: [RewardsComponent, ClaimTableComponent]
})
export class RewardsModule { }
