import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RankingsComponent } from './rankings.component';
import { MaterialModule } from '../../material-module';
import { RankingsTableComponent } from './rankings-table/rankings-table.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [RankingsComponent, RankingsTableComponent]
})
export class RankingsModule { }
