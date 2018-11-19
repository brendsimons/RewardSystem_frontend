import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {OpdrachtenIngevenComponent} from './opdrachten-ingeven.component';
import {MaterialModule} from '../../material-module';

@NgModule({
    imports: [
        CommonModule, MaterialModule
    ],
    declarations: [OpdrachtenIngevenComponent]
})
export class OpdrachtenIngevenModule {
}                                                                         
