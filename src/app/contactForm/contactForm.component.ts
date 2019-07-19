import {Component, OnInit,} from '@angular/core';
// import '../../assets/js/index';
declare const myTest:any;

@Component({
  selector: 'contact-form',
  templateUrl: './contactForm.component.html',
  styleUrls: ['./contactForm.component.css']
})

export class ContactFormComponent implements OnInit {

  name: string;
  email1: string;
  message: string;


  constructor() {}

  ngOnInit() {

  }

  onsubmit() {
    alert('myTestCalled');
     myTest();
    }
  }


