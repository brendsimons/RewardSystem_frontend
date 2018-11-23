import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RewardsAanpassenComponent } from './rewards-aanpassen.component';
import {MaterialModule} from '../../material-module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
  ],
  declarations: [RewardsAanpassenComponent]
})
export class RewardsAanpassenModule { }
