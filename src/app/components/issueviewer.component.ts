import { Component, OnInit } from '@angular/core';
import { JiraService } from '../lib/jira.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueDetailsBaseComponent } from './issue-details-base';
import { PersistenceService } from '../lib/persistence.service';
import { CustomNodeTypes } from '../lib/tree-utils';

@Component({
    selector: 'app-issueviewer',
    templateUrl: './issueviewer.component.html'
})
export class IssueviewerComponent extends IssueDetailsBaseComponent implements OnInit {
    public initiativeToEdit: any;
    public showInitiativeSetup = false;

    constructor(public router: Router, public activatedRoute: ActivatedRoute, public jiraService: JiraService, public persistenceService: PersistenceService) {
        super(router, activatedRoute, jiraService, persistenceService);
    }
    ngOnInit(): void {
        this.includeHierarchy = true;
        this.initiatize();
    }

    onPurposeNodeEdit(args) {
        if (args) {
            switch (args.type) {
                case CustomNodeTypes.Organization: this.showOrganizationSetup = true;
                    break;
                case CustomNodeTypes.Initiative:
                    this.initiativeToEdit = args;
                    this.showInitiativeSetup = true;
                    break;
            }
        }
    }
}
