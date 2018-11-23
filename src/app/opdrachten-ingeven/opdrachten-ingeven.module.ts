import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OpdrachtenIngevenComponent} from './opdrachten-ingeven.component';
import {MaterialModule} from '../../material-module';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        MaterialModule,
        FormsModule
    ],
    declarations: [OpdrachtenIngevenComponent]
})
export class OpdrachtenIngevenModule { }
