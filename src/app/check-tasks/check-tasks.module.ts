import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckTasksComponent } from './check-tasks.component';
import {MaterialModule} from '../../material-module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
  ],
  declarations: [CheckTasksComponent]
})
export class CheckTasksModule { }
