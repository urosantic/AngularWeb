import {Component, ElementRef, HostBinding, HostListener, OnInit} from '@angular/core';
import {animate, query, stagger, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector:'arsenal',
  templateUrl:'./arsenal.component.html',
  styleUrls:['./arsenal.component.css'],
  // animations: [
  //   trigger('scrollAnimation', [
  //     state('show', style({
  //       opacity: 1,
  //       transform: 'translateX(0)'
  //     })),
  //     state('hide', style({
  //       opacity: 0,
  //       transform: 'translateX(0)'
  //     })),
  //     transition('show => hide', animate('700ms ease-out')),
  //     transition( 'hide => show', animate('600ms 0.2s ease-in'))
  //   ])
  // ]
  //reuse the same animation with different delays

  animations:[
    trigger('fadeIn',[
      transition(':enter', [
        query('img', [
          style({opacity:0, transform: 'translateY(0)'}),
          stagger(-30,[
            animate('500ms cubic-bezier(0.35,0,0.25,1)'), style({opacity:1,transform:'none'})
          ])
          ])
        ]
        )
    ])
  ]
})

export class ArsenalComponent{
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
