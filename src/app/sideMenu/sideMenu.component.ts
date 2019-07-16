import {Component, ElementRef} from '@angular/core';
import {TooltipPosition} from "@angular/material/tooltip";

@Component({
  selector:'side-menu',
  templateUrl:'./sideMenu.component.html',
  styleUrls:['./sideMenu.component.css']
})

export class SideMenuComponent {

  scrollToElement: HTMLElement;

  hover = false;

  scrollTopPage() {
    let el = document.getElementById('topPage1');
    el.scrollIntoView({behavior:'smooth'});
  }

  scrollCase() {
    // el.scrollIntoView({behavior:"smooth"}).findElement('#caseStudy');
    let el = document.getElementById('caseStudyID');
    el.scrollIntoView({behavior:'smooth'});
  }

  scrollSuccess() {
    let el = document.getElementById('success1');
    el.scrollIntoView({behavior:'smooth'});
  }

  scrollServices() {
    let el = document.getElementById('services1');
    el.scrollIntoView({behavior:'smooth'});
  }

  scrollClients() {
    let el = document.getElementById('clients1');
    el.scrollIntoView({behavior:'smooth'});
  }

  scrollWork() {
    let el = document.getElementById('work1');
    el.scrollIntoView({behavior:'smooth'});
  }
  scrollContact() {
    let el = document.getElementById('contact1');
    el.scrollIntoView({behavior:'smooth'});
  }

}

