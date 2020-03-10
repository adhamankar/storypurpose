import { JiraService } from '../jira.service';
import { transformParentNode, flattenAndTransformNodes } from '../tree-utils';
import * as _ from 'lodash';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { PersistenceService } from '../persistence.service';

export class IssueDetailsBaseComponent {
    public title = 'text-matrix';
    public keyId = "GBP-35381";
    public result: any;
    public linkedRecords: any;
    public selectedNode: any;
    public zoom = 100;

    public selectedIssue: any;
    public showDetails = false;
    public includeHierarchy = false;
    public pageId = "storypurpose";

    public showOrganizationSetup = false;
    public organizationDetails: any;

    public purpose = [];
    constructor(public activatedRoute: ActivatedRoute, public jiraService: JiraService, public persistenceService: PersistenceService) {
    }

    public initiatize(): void {
        this.organizationDetails = this.persistenceService.getOrganizationDetails();
        this.activatedRoute.params.pipe(
            filter(p => p && p["issue"] && p["issue"].length > 0),
            map(p => p["issue"])
        ).subscribe(issueKey => {
            this.pageId = issueKey;
            // TODO: If type == EPIC, ad epic and initiative fields
            this.jiraService.getIssueDetails(issueKey, [], `${issueKey.toLowerCase()}.json`)
                .pipe(filter(p => p !== null && p !== undefined))
                .subscribe(issuedetails => this.onIssueSelected(issuedetails));
        });
    }

    public loadNode(event) {
        if (event.node.type === "epic-children") {
            this.jiraService.executeJql(`'epic Link'=${event.node.parentId}`, [], 'epic-children.json')
                .subscribe((data: any) => {
                    if (data && data.issues) {
                        const list = flattenAndTransformNodes(data.issues);
                        event.node.children = list;
                        event.node.expanded = true;
                    }
                });
        }
    }

    public nodeSelected(event) {
        this.purpose = [];
        this.populatePurpose(event.node)
        _.reverse(this.purpose);
        switch (event.node.type) {
            case "Test Suite":
                this.selectedIssue = event.node;
                this.showDetails = true;
                break;
        }
    }

    public onIssueSelected(issue) {
        this.result = issue;
        this.showDetails = false;
        if (this.result) {
            let root = transformParentNode(this.result, this.includeHierarchy);
            if (this.includeHierarchy && root.type === 'Project') {
                this.populateProjectDescription(root);
            }
            root = this.populateOrganizationDescription(root);
            this.linkedRecords = [root];
        }
    }

    private populateProjectDescription(root: any) {
        const projectDetails: any = this.persistenceService.getProjectDetails(root.key);

        if (projectDetails) {
            root.description = projectDetails.description;
        }
        else {
            this.jiraService.getProjectDetails(root.key, `${root.key}.json`)
                .pipe(filter(p => p !== null && p !== undefined), map((p: any) => {
                    return {
                        key: p.key,
                        name: p.name,
                        description: p.description
                    };
                }))
                .subscribe((projectDetails: any) => {
                    this.persistenceService.setProjectDetails(projectDetails);
                    root.description = projectDetails.description;
                });
        }
    }
    public populateOrganizationDescription(root: any) {
        if (this.organizationDetails) {
            return {
                key: this.organizationDetails.name,
                title: this.organizationDetails.name,
                label: this.organizationDetails.name,
                description: this.organizationDetails.purpose,
                type: 'Organization',
                children: [root],
                expanded: true
            }
        }
        return root;
    }

    public setupOrganization() {
        this.showOrganizationSetup = true;
    }
    public organizationSetupCompleted() {
        this.showOrganizationSetup = false;
        window.location.reload();
    }

    public populatePurpose(node) {
        if (node) {
            if (node.type !== 'epic-children' && node.type !== 'Inward' && node.type !== 'Outward') {
                this.purpose.push({ type: `${node.type}`, title: node.label, purpose: node.description });
            }
            if (node.parent) {
                this.populatePurpose(node.parent);
            }
        }
    }
}
