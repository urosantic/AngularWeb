import {Component, Input, OnInit} from '@angular/core';

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
