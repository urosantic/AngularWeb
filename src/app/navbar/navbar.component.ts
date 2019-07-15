import { Component } from '@angular/core';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  scrollTopPage() {
    let el = document.getElementById('topPage1');
    el.scrollIntoView({behavior:'smooth'});
  }
  scrollSuccess() {
    let el = document.getElementById('success1');
    el.scrollIntoView({behavior:'smooth'});
  }
  scrollServices() {
    let el = document.getElementById('services1');
    el.scrollIntoView({behavior:'smooth'});
  }

  scrollClients() {
    let el = document.getElementById('clients1');
    el.scrollIntoView({behavior:'smooth'});
  }

  scrollWork() {
    let el = document.getElementById('work1');
    el.scrollIntoView({behavior:'smooth'});
  }
  scrollContact() {
    let el = document.getElementById('contact1');
    el.scrollIntoView({behavior:'smooth'});
  }
}
