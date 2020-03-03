import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  showSetup = false;
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

  setupCompleted() {
    this.showSetup = false;
    window.location.reload();
  }
}
