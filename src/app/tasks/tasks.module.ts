import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TasksComponent } from './tasks.component';
import { MaterialModule } from '../../material-module';
import { FormsModule } from '@angular/forms';
import { EditCardModule } from './edit-card/edit-card.module';
import { EditCardComponent } from './edit-card/edit-card.component';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        EditCardModule,
    ],
    declarations: [TasksComponent, EditCardComponent]
})
export class TasksModule { }
