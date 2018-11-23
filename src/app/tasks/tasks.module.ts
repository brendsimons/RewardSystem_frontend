import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { MaterialModule } from '../../material-module';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule
    ],
    declarations: [TasksComponent]
})
export class TasksModule { }
