import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShopComponent } from './shop.component';
import {MaterialModule} from '../../material-module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  declarations: [ShopComponent]
})
export class ShopModule { 
  
}
