import { Component, OnInit, OnDestroy } from '@angular/core';
import * as _ from 'lodash';
import { Router, NavigationEnd } from '@angular/router';
import { PersistenceService } from '../lib/persistence.service';
import { DataService, SharedDatatype } from '../lib/data.service';
import { Subscription } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';
import { DomSanitizer } from '@angular/platform-browser';

import { environment } from '../../environments/environment';

declare let gtag: Function;

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

  menulist: any;
  constructor(public router: Router, public persistenceService: PersistenceService, public sanitizer: DomSanitizer,
    public dataService: DataService) {
    if (environment.production) {
      this.router.events.subscribe(event => {
        if (event instanceof NavigationEnd) {
          gtag('config', environment.gacode, { 'page_path': event.urlAfterRedirects });
        }
      })
    }
  }


  ngOnInit() {
    this.menulist = [
      { label: 'Setup connection', icon: 'pi pi-cog', command: () => this.showConnectionDetailsSetup = true },
      { label: 'Custom fields', icon: 'pi pi-sliders-h', command: () => this.showCustomFieldSetup = true },
    ];

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

  configSetupCompleted() {
    this.showConfigSetup = false;
    window.location.reload();
  }
}
