import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {SideMenuComponent} from "./sideMenu/sideMenu.component";
import {TopPageComponent} from "./topPage/topPage.component";
import {ServicesComponent} from "./services/services.component";
import {ArsenalComponent} from "./arsenal/arsenal.component";
import {RxstoryComponent} from "./rxStory/rxstory.component";
import {ClientsComponent} from "./clients/clients.component";
import {YeetComponent} from "./yeet/yeet.component";
import {AlertModule} from "ngx-bootstrap";

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    TopPageComponent,
    ServicesComponent,
    ArsenalComponent,
    RxstoryComponent,
    ClientsComponent,
    YeetComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
