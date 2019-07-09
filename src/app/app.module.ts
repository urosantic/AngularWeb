import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatVideoModule } from 'mat-video';
import { MDBBootstrapModule } from 'angular-bootstrap-md';


import { AppComponent } from './app.component';
import {SideMenuComponent} from "./sideMenu/sideMenu.component";
import {TopPageComponent} from "./topPage/topPage.component";
import {ServicesComponent} from "./services/services.component";
import {ArsenalComponent} from "./arsenal/arsenal.component";
import {RxstoryComponent} from "./rxStory/rxstory.component";
import {ClientsComponent} from "./clients/clients.component";
import {YeetComponent} from "./yeet/yeet.component";
import {HyperComponent} from "./hyper/hyper.component";
import {EmergeComponent} from "./emerge/emerge.component";
import {ContactComponent} from "./contact/contact.component";
import {EducationComponent} from "./education/education.component";
import {FiatComponent} from "./fiat/fiat.component";
import {FootyComponent} from "./footy/footy.component";
import {NimbusComponent} from "./nimbus/nimbus.component";
import {SeeallworkComponent} from "./seeAllWork/seeallwork.component";
import {SubmergeComponent} from "./submerge/submerge.component";
import {InTheNewsComponent} from "./inTheNews/inTheNews.component";
import {ContactFormComponent} from "./contactForm/contactForm.component";
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {WorkComponent} from "./work/work.component";
import {FormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FooterComponent} from "./footer/footer.component";
import {ScrollToModule} from "ng2-scroll-to-el";


const appRoutes: Routes = [
  { path:'', component: HomeComponent},
  { path:'work', component: WorkComponent},
];

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
    SubmergeComponent,
    InTheNewsComponent,
    ContactFormComponent,
    HomeComponent,
    WorkComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes,{scrollPositionRestoration:'enabled'}),
    ScrollToModule.forRoot(),
    MatVideoModule,
    MDBBootstrapModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
