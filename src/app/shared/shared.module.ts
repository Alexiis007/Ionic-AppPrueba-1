import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonMenu, IonicModule } from '@ionic/angular';
import { MenuComponent } from './components/menu/menu.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    AppRoutingModule
  ],
  exports:[
    MenuComponent,
  ]
})
export class SharedModule { }
