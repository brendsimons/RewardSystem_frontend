import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../../material-module';
import { RewardsIngevenComponent } from './rewards-ingeven.component';

@NgModule({
  imports: [
    CommonModule,
      MaterialModule,
      FormsModule
  ],
  declarations: [RewardsIngevenComponent]
})
export class RewardsIngevenModule { }
