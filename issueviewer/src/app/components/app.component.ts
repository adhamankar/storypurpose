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
  missingConnectionDetails = false;
  constructor(public router: Router) {
  }

  ngOnInit() {
    this.missingConnectionDetails = !localStorage.getItem('connectionDetails');
  }
  navigateTo(issue) {
    this.router.navigate([issue]);
  }

  setupCompleted() {
    this.showSetup = false;
    window.location.reload();
  }
}
