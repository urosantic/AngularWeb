import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SideMenuComponent} from "./sideMenu/sideMenu.component";
import {TopPageComponent} from "./topPage/topPage.component";

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    TopPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
