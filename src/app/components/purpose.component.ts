import { Component, OnInit } from '@angular/core';
import { JiraService } from '../lib/jira.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueDetailsBaseComponent } from './issue-details-base';
import { PersistenceService } from '../lib/persistence.service';
import { CustomNodeTypes } from '../lib/tree-utils';

@Component({
    selector: 'app-purpose',
    templateUrl: './purpose.component.html'
})
export class PurposeComponent extends IssueDetailsBaseComponent implements OnInit {
    constructor(public router: Router, public activatedRoute: ActivatedRoute, public jiraService: JiraService, public persistenceService: PersistenceService) {
        super(router, activatedRoute, jiraService, persistenceService);
    }

    ngOnInit(): void {
        this.includeHierarchy = true;
        this.initiatize();
    }

    isOrganizationNode = (item) => (item.type === CustomNodeTypes.Organization);

}
