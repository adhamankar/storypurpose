import { Component, Input, OnInit, OnDestroy } from '@angular/core';
import { JiraService } from '../lib/jira.service';
import { flattenNodes, appendExtendedFields } from '../lib/tree-utils';
import * as _ from 'lodash';
import { filter, withLatestFrom } from 'rxjs/operators';
import { PersistenceService } from '../lib/persistence.service';
import { Subscription } from 'rxjs';
import { DataService, SharedDatatype } from '../lib/data.service';

@Component({
    selector: 'app-sub-details',
    templateUrl: './sub-details.component.html'
})
export class SubDetailsComponent implements OnInit, OnDestroy {
    _issue: any;
    @Input()
    set issue(value: any) {
        this._issue = value;
        if (value) {
            this.loadDetails(value);
        }
    }
    get issue(): any {
        return this._issue;
    }

    childIssueType = '';
    testcases: any;
    hasExtendedFields = false;
    showDetails = false;
    hideExtendedFields = false;
    summary: any;

    subscription: Subscription;

    constructor(public jiraService: JiraService, public persistenceService: PersistenceService,
        public dataService: DataService) {

    }
    ngOnInit(): void {
        this.subscription = this.dataService.getSharedData(SharedDatatype.RecentlyVisited)
            .pipe(withLatestFrom(p => p))
            .subscribe(rv => this.issue = rv);
    }
    ngOnDestroy(): void {
        this.subscription ? this.subscription.unsubscribe() : null;
    }

    loadDetails(issue) {
        this.childIssueType = 'ST-Technical task';
        if (issue && issue.type === "Test Suite") {
            this.childIssueType = 'ST-Test Case'
        }
        const extendedFields = this.persistenceService.getExtendedFieldByIssueType(this.childIssueType);
        this.hasExtendedFields = (extendedFields && extendedFields.length > 0);

        const codeList = _.map(extendedFields, (ef) => ef.code);
        const jql = `issuetype in ('${this.childIssueType}') AND parent=${issue.key}`;
        this.jiraService.executeJql(`issuetype in ('ST-Technical task', 'ST-Test Case') AND parent=${issue.key}`, codeList, 'test-cases.json')
            .pipe(filter((data: any) => data && data.issues))
            .subscribe((data: any) => {
                this.testcases = flattenNodes(data.issues);

                appendExtendedFields(this.testcases, extendedFields);

                this.summary = _.mapValues(_.groupBy(_.map(this.testcases, 'status')), (s) => s.length);
            });

    }
}