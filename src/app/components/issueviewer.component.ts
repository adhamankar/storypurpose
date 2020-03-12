import { Component, OnInit } from '@angular/core';
import { JiraService } from '../lib/jira.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueDetailsBaseComponent } from './issue-details-base';
import { PersistenceService } from '../lib/persistence.service';

@Component({
    selector: 'app-issueviewer',
    templateUrl: './issueviewer.component.html'
})
export class IssueviewerComponent extends IssueDetailsBaseComponent implements OnInit {
    constructor(public router: Router, public activatedRoute: ActivatedRoute, public jiraService: JiraService, public persistenceService: PersistenceService) {
        super(router, activatedRoute, jiraService, persistenceService);
    }

    ngOnInit(): void {
        this.initiatize();
    }
}
