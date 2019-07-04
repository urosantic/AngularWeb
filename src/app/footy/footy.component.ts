import {Component, ElementRef, HostListener} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector:'footy',
  templateUrl:'./footy.component.html',
  styleUrls:['./footy.component.css'],
  animations: [
    trigger('fadeOnScroll', [
      state('show', style({
        opacity: 1,
      })),
      state('hide', style({
        opacity: 0,
      })),
      transition( 'hide => show', animate('300ms ease-in'))
      // transition( 'show => hide', animate('700ms ease-out'))
    ]),
    trigger('fadeOnScroll2', [
      state('show', style({
        opacity: 1,
      })),
      state('hide', style({
        opacity: 0,
      })),
      transition( 'hide => show', animate('300ms 200ms ease-in'))
      // transition( 'show => hide', animate('700ms ease-out'))
    ])
  ]
})

export class FootyComponent {
  state =  'hide';
  state2 = 'hide';

  constructor(public el: ElementRef){}

  @HostListener('window:scroll',['$event'])
  checkScroll(){
    const componentPosition = this.el.nativeElement.offsetTop;
    const scrollPosition = window.pageYOffset;

    if (scrollPosition +300 >= componentPosition) {
      this.state = 'show';
      this.state2 ='show';
    }
  }
}
