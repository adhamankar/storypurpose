import { Component, OnInit } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { PersistenceService } from '../lib/persistence.service';
import { DataService, SharedDatatype } from '../lib/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  showConnectionDetailsSetup = false;
  showCustomFieldSetup = false;

  issue: string;
  connectionDetails: any;
  constructor(public router: Router, public persistenceService: PersistenceService, public dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getSharedData(SharedDatatype.ConnectionDetails)
      .subscribe(cd => this.showConnectionDetailsSetup = cd);

    this.connectionDetails = this.persistenceService.getConnectionDetails();
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
