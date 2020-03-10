import { Component, OnInit } from '@angular/core';
import { JiraService } from '../jira.service';
import { ActivatedRoute } from '@angular/router';
import { IssueDetailsBaseComponent } from './issue-details-base';

@Component({
    selector: 'app-issueviewer',
    templateUrl: './issueviewer.component.html'
})
export class IssueviewerComponent extends IssueDetailsBaseComponent implements OnInit {
    constructor(public activatedRoute: ActivatedRoute, public jiraService: JiraService) {
        super(activatedRoute, jiraService);
    }

    ngOnInit(): void {
        this.initiatize();
    }
}
