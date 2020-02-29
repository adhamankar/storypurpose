import { Component, Input } from '@angular/core';
import { JiraService } from '../jira.service';
import { flattenNodes } from '../tree-utils';
import * as _ from 'lodash';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-sub-details',
    templateUrl: './sub-details.component.html'
})
export class SubDetailsComponent {
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

    testcases: any;
    showDetails = false;
    constructor(public jiraService: JiraService) {
    }

    loadDetails(issue) {
        if (issue && issue.type === "Test Suite") {
            this.jiraService.executeJql(`issuetype='ST-Test Case' AND parent=${issue.key}`, 'test-cases.json')
                .pipe(filter((data: any) => data && data.issues))
                .subscribe((data: any) => this.testcases = flattenNodes(data.issues));
        }
    }
}