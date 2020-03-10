import { Component, OnInit } from '@angular/core';
import { JiraService } from '../jira.service';
import { ActivatedRoute } from '@angular/router';
import { IssueDetailsBaseComponent } from './issue-details-base';
import { PersistenceService } from '../persistence.service';

@Component({
    selector: 'app-purpose',
    templateUrl: './purpose.component.html'
})
export class PurposeComponent extends IssueDetailsBaseComponent implements OnInit {
    constructor(public activatedRoute: ActivatedRoute, public jiraService: JiraService, public persistenceService: PersistenceService) {
        super(activatedRoute, jiraService, persistenceService);
    }

    ngOnInit(): void {
        this.includeHierarchy = true;
        this.initiatize();
    }    
}
