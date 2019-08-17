import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  data: Array<any> = [{
    text: 'My Profile'
}, {
    text: 'Friend Requests'
}, {
    text: 'Account Settings'
}, {
    text: 'Support'
}, {
    text: 'Log Out'
}];

}
