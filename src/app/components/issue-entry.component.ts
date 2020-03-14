import { Component } from '@angular/core';
import * as _ from 'lodash';
import { Router } from '@angular/router';

@Component({
    selector: 'app-issue-entry',
    templateUrl: './issue-entry.component.html'
})
export class IssueEntryComponent {
    issue: string;
    constructor(public router: Router) {
    }

    canNavigate = () => this.issue && this.issue.trim().length > 0

    navigateTo(issue) {
        if (this.canNavigate()) {
            this.router.navigate(['/for', issue.trim()]);
        }
    }
}
