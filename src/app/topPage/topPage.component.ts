import { Component } from '@angular/core';
import {animate, style, transition, trigger} from "@angular/animations";
import {EmbedVideoService} from "ngx-embed-video/dist";


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

    youtubeUrl ='https://www.youtube.com/watch?v=pE4OrUytCCk';
    youtubeID = 'pE4OrUytCCk';


}
