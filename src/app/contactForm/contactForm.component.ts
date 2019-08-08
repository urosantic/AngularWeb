import {Component, OnInit,} from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'contact-form',
  templateUrl: './contactForm.component.html',
  styleUrls: ['./contactForm.component.css']
})

export class ContactFormComponent implements OnInit {


  constructor(private http: HttpClient) { }

  name: string;
  message: string;
  email1: string;
  email:string;

  ngOnInit() {

  }

  onCreatePost() {
    let parameters  = new HttpParams();
    parameters = parameters.append('message', this.message);
    parameters = parameters.append('name', this.name);
    parameters = parameters.append('email',this.email);

    console.log(parameters);

    this.http
      .post (
      'https://us-central1-alexwebsite-fd702.cloudfunctions.net/sendEmail',null,{
        params: parameters
        }
      )
      .subscribe(responseData => {
        console.log(responseData);
      });
  }
}


