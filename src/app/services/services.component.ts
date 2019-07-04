import {Component, ElementRef, Input, ViewChild, OnInit} from '@angular/core';
import {BehaviorSubject} from "rxjs/Rx";

@Component({
  selector:'services',
  templateUrl:'./services.component.html',
  styleUrls:['./services.component.css']
})

export class ServicesComponent implements OnInit{

  @Input() scrollToElement: string;

  ngOnInit() {
    console.log(this.scrollToElement);
  }

  scroll(el: HTMLElement) {
    el.scrollIntoView({behavior:"smooth"});
  }


}
