import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { PersistenceService } from '../lib/persistence.service';
import * as _ from "lodash";
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { DataService, SharedDatatype } from '../lib/data.service';
import { Subscription } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';

@Component({
    selector: 'app-recently-viewed',
    templateUrl: './recently-viewed.component.html'
})
export class RecentlyViewedComponent implements OnInit, OnDestroy {
    public issues = [];
    _issue: any;

    subscription: Subscription;

    constructor(public dataService: DataService) {

    }
    ngOnInit(): void {
        this.subscription = this.dataService.getSharedData(SharedDatatype.RecentlyVisited)
            .pipe(withLatestFrom(p => p))
            .subscribe(rv => this.setIssue(rv));
    }
    ngOnDestroy(): void {
        this.subscription ? this.subscription.unsubscribe() : null;
    }
    forgetIssue(index) {
        this.issues.splice(index, 1);
    }
    setIssue(value: any) {
        this._issue = value;
        if (value && value.key) {
            _.remove(this.issues, { "key": value.key });
            if (this.issues.length >= 5) {
                this.issues.splice(5, 1);
            }
            _.forEach(this.issues, (i) => i.active = false);
            const recentMost = { key: value.key, title: value.label, active: true };
            this.issues.unshift(recentMost);
        }
    }
}
