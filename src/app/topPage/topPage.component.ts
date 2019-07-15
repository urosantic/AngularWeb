import { Component } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";

@Component({
  selector:'top-page',
  templateUrl:'./topPage.component.html',
  styleUrls:['./topPage.component.css'],
  animations:[
    trigger('fade',[
      transition ('void => *',[
        style({opacity:0}),
        animate('1000ms 0.2s ease-in')
      ])
    ])

  ]
})

export class TopPageComponent {
    scrollContact() {
      let el = document.getElementById('contactFormAlex');
      el.scrollIntoView({behavior:'smooth'});
    }
}
