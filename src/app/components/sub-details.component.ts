import { Component, Input } from '@angular/core';
import { JiraService } from '../lib/jira.service';
import { flattenNodes, appendExtendedFields } from '../lib/tree-utils';
import * as _ from 'lodash';
import { filter } from 'rxjs/operators';
import { PersistenceService } from '../lib/persistence.service';

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
    hasExtendedFields = false;
    showDetails = false;
    hideExtendedFields = false;
    summary: any;
    constructor(public jiraService: JiraService, public persistenceService: PersistenceService) {
    }

    loadDetails(issue) {
        let childIssueType = 'ST-Technical task';
        if (issue && issue.type === "Test Suite") {
            childIssueType = 'ST-Test Case'
        }
        const extendedFields = this.persistenceService.getExtendedFieldByIssueType(childIssueType);
        this.hasExtendedFields = (extendedFields && extendedFields.length > 0);

        const codeList = _.map(extendedFields, (ef) => ef.code);
        const jql = `issuetype in ('${childIssueType}') AND parent=${issue.key}`;
        this.jiraService.executeJql(`issuetype in ('ST-Technical task', 'ST-Test Case') AND parent=${issue.key}`, codeList, 'test-cases.json')
            .pipe(filter((data: any) => data && data.issues))
            .subscribe((data: any) => {
                this.testcases = flattenNodes(data.issues);

                appendExtendedFields(this.testcases, extendedFields);

                this.summary = _.mapValues(_.groupBy(_.map(this.testcases, 'status')), (s) => s.length);
            });

    }
}