import { Component, OnInit, OnDestroy } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { PersistenceService } from '../lib/persistence.service';
import { DataService, SharedDatatype } from '../lib/data.service';
import { Subscription } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  showConnectionDetailsSetup = false;
  showCustomFieldSetup = false;

  issue: string;
  connectionDetails: any;
  subscription: Subscription
  constructor(public router: Router, public persistenceService: PersistenceService, public dataService: DataService) {
  }

  ngOnInit() {
    this.subscription = this.dataService.getSharedData(SharedDatatype.ConnectionDetails)
      .pipe(withLatestFrom(p => p))
      .subscribe(cd => this.showConnectionDetailsSetup = cd);

    this.connectionDetails = this.persistenceService.getConnectionDetails();
  }
  ngOnDestroy() {
    this.subscription ? this.subscription.unsubscribe() : null;
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
