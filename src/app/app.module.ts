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
import {HyperComponent} from "./hyper/hyper.component";
import {EmergeComponent} from "./emerge/emerge.component";
import {Container} from "@angular/compiler/src/i18n/i18n_ast";
import {ContactComponent} from "./contact/contact.component";
import {EducationComponent} from "./education/education.component";
import {FiatComponent} from "./fiat/fiat.component";
import {FootyComponent} from "./footy/footy.component";
import {NimbusComponent} from "./nimbus/nimbus.component";
import {SeeallworkComponent} from "./seeAllWork/seeallwork.component";
import {SubmergeComponent} from "./submerge/submerge.component";

@NgModule({
  declarations: [
    AppComponent,
    SideMenuComponent,
    TopPageComponent,
    ServicesComponent,
    ArsenalComponent,
    RxstoryComponent,
    ClientsComponent,
    YeetComponent,
    HyperComponent,
    EmergeComponent,
    ContactComponent,
    EducationComponent,
    FiatComponent,
    FootyComponent,
    NimbusComponent,
    SeeallworkComponent,
    SubmergeComponent
  ],
  imports: [
    BrowserModule,
    AlertModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
