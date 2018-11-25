import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TaskClaimsComponent } from './task-claims.component';
import { MaterialModule } from '../../material-module';
import { ClaimTableComponent } from './claim-table/claim-table.component';
import { FinishedClaimsTableComponent } from './finished-claims-table/finished-claims-table.component';
import { TaskChangestatusComponent } from './task-changestatus/task-changestatus.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [TaskClaimsComponent, ClaimTableComponent, FinishedClaimsTableComponent, TaskChangestatusComponent]
})
export class TaskClaimsModule { }
