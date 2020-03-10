import { JiraService } from '../jira.service';
import { transformParentNode, flattenAndTransformNodes } from '../tree-utils';
import * as _ from 'lodash';
import { ActivatedRoute } from '@angular/router';
import { filter, map } from 'rxjs/operators';

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

    constructor(public activatedRoute: ActivatedRoute, public jiraService: JiraService) {
    }

    public initiatize(): void {
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
        switch (event.node.type) {
            case "organization":
                event.node.label = "updated org";
                event.node.title = "updated org";
                break;
            case "project":
                event.node.label = "updated project";
                event.node.title = "updated project";
                break;
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
            const root = transformParentNode(this.result, true);
            this.linkedRecords = [root];
        }
    }
}
