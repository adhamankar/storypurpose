import { Component, OnInit, OnDestroy } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';
import { PersistenceService } from '../lib/persistence.service';
import { DataService, SharedDatatype } from '../lib/data.service';
import { Subscription } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit, OnDestroy {
  showConnectionDetailsSetup = false;
  showCustomFieldSetup = false;
  showConfigSetup = false;
  issue: string;
  connectionDetails: any;
  subscription: Subscription;

  configurations: any;
  downloadJsonHref: any;

  constructor(public router: Router, public persistenceService: PersistenceService, public sanitizer: DomSanitizer,
    public dataService: DataService) {
  }

  ngOnInit() {

    this.subscription = this.dataService.getSharedData(SharedDatatype.ConnectionDetails)
      .pipe(withLatestFrom(p => p))
      .subscribe(cd => this.showConnectionDetailsSetup = cd);

    this.connectionDetails = this.persistenceService.getConnectionDetails();

    this.configurations = {};
    this.configurations.connectionDetails = this.connectionDetails || {};
    this.configurations.connectionDetails.password = null;
    this.configurations.connectionDetails.username = null;
    this.configurations.connectionDetails.encoded = undefined;
    this.configurations.connectionDetails.offlineMode = undefined;

    this.configurations.fieldMapping = this.persistenceService.getFieldMapping();
    this.configurations.organizationDetails = this.persistenceService.getOrganizationDetails() || {};

    this.generateDownloadJsonUri();
  }

  generateDownloadJsonUri() {
    var theJSON = JSON.stringify(this.configurations);
    var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(theJSON));
    this.downloadJsonHref = uri;
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

  configSetupCompleted() {
    this.showConfigSetup = false;
    window.location.reload();
  }
}
