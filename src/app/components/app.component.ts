import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  showConnectionDetailsSetup = false;
  showCustomFieldSetup = false;

  issue: string;
  connectionDetails: any;
  missingConnectionDetails = true;
  constructor(public router: Router) {
  }

  ngOnInit() {
    const payload = localStorage.getItem('connectionDetails');
    if (payload) {
      this.missingConnectionDetails = false;
      this.connectionDetails = JSON.parse(payload) || {};
    }

  }
  navigateTo(issue) {
    this.router.navigate([issue]);
  }

  connectionDetailsSetupCompleted() {
    this.showConnectionDetailsSetup = false;
    window.location.reload();
  }

  customFieldSetupCompleted() {
    this.showCustomFieldSetup = false;
    window.location.reload();
  }
}
