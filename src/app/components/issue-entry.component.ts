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

    navigateTo(issue) {
        this.router.navigate(['/for', issue]);
    }
}
