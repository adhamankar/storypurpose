import { Component, Input } from '@angular/core';
import { PersistenceService } from '../lib/persistence.service';
import * as _ from "lodash";
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { DataService, SharedDatatype } from '../lib/data.service';

@Component({
    selector: 'app-recently-viewed',
    templateUrl: './recently-viewed.component.html'
})
export class RecentlyViewedComponent {
    public issues = [];
    _issue: any;
    @Input()
    set issue(value: any) {
        this._issue = value;
        if (value && value.fields && value.key) {
            _.remove(this.issues, { "key": value.key });
            if (this.issues.length >= 5) {
                this.issues.splice(5, 1);
            }
            _.forEach(this.issues, (i) => i.active = false);
            const recentMost = { key: value.key, title: value.fields.summary, active: true };
            this.issues.unshift(recentMost);
            this.dataService.updateSharedData(SharedDatatype.RecentlyVisited, this.issues);
        }
    }
    get issue(): any {
        return this._issue;
    }

    constructor(public dataService: DataService) {

    }
    forgetIssue(index) {
        this.issues.splice(index, 1);
    }
}
