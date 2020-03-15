import { Component, OnInit } from '@angular/core';
import { JiraService } from '../lib/jira.service';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueDetailsBaseComponent } from './issue-details-base';
import { PersistenceService } from '../lib/persistence.service';
import { CustomNodeTypes } from '../lib/tree-utils';
import { DataService } from '../lib/data.service';

@Component({
    selector: 'app-issueviewer',
    templateUrl: './issueviewer.component.html'
})
export class IssueviewerComponent extends IssueDetailsBaseComponent implements OnInit {
    public initiativeToEdit: any;
    public showInitiativeSetup = false;

    constructor(public router: Router, public activatedRoute: ActivatedRoute,
        public jiraService: JiraService,
        public persistenceService: PersistenceService,
        public dataService: DataService) {
        super(router, activatedRoute, jiraService, persistenceService, dataService);
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
                case CustomNodeTypes.Hierarchy:
                    this.initiativeToEdit = args;
                    this.showInitiativeSetup = true;
                    break;
            }
        }
    }
}
