import {Component, ElementRef, HostListener} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector:'hyper',
  templateUrl:'./hyper.component.html',
  styleUrls:['./hyper.component.css'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      state('hide', style({
        opacity: 0,
        transform: 'translateX(-100%)'
      })),
      transition('show => hide', animate('700ms ease-out')),
      transition( 'hide => show', animate('600ms 0.2s ease-in'))
    ])
  ]
})

export class HyperComponent {
  state = 'hide';

  constructor(public el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition + 200 >= componentPosition) {
      this.state = 'show';
    } else {
      this.state = 'hide';
    }
  }
}
