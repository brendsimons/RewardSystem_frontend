import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EditTasksComponent } from './edit-tasks.component';
import {MaterialModule} from '../../material-module';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
  ],
  declarations: [EditTasksComponent]
})
export class EditTasksModule { }
