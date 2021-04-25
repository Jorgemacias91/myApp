import { RouterModule } from '@angular/router';
import { IonicModule } from '@ionic/angular';
import { MenuComponent } from './menu/menu.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    IonicModule,RouterModule
  ]
})
export class ComponentModule { }
