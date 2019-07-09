import {Component, ElementRef} from '@angular/core';
import {ScrollToService} from "ng2-scroll-to-el";

@Component({
  selector:'side-menu',
  templateUrl:'./sideMenu.component.html',
  styleUrls:['./sideMenu.component.css']
})

export class SideMenuComponent {

  scrollToElement: HTMLElement;

  hover = false;

  scroll() {
    // el.scrollIntoView({behavior:"smooth"});
  }

  scrollCase() {
    // el.scrollIntoView({behavior:"smooth"}).findElement('#caseStudy');
    let el = document.getElementById('caseStudyID');
    el.scrollIntoView({behavior:'smooth'});
  }

  scrollNimbus() {
    let el = document.getElementById('nimbus');
    el.scrollIntoView({behavior:'smooth'});
  }

  scrollServices() {
    let el = document.getElementById('services1');
    el.scrollIntoView({behavior:'smooth'});
  }

  scrollTopPage() {
    let el = document.getElementById('topPage1');
    el.scrollIntoView({behavior:'smooth'});
  }


}

