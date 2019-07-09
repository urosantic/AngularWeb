import {Component, OnInit,} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'contact-form',
  templateUrl: './contactForm.component.html',
  styleUrls: ['./contactForm.component.css']
})

export class ContactFormComponent implements OnInit {

  name: string;
  email1: string;
  message: string;

  endpoint = '../../assets/js/sendemail.js';

  constructor() {}

  ngOnInit() {

  }

  onsubmit() {
    // const allInfo = `My name is ${this.name}. My email is ${this.email}. My message is ${this.message}`;
    // alert(allInfo);

      const data = {
        toEmail: 'urosantic@hotmail.com',
        toName: 'Jeff Delaney'
      }

      this.http.post(this.endpoint, data).subscribe()
    }
  }


