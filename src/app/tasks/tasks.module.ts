import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { MaterialModule } from '../../material-module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
    ],
    declarations: [TasksComponent]
})
export class TasksModule { }
