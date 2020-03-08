import { Component, OnInit } from '@angular/core';
import { JiraService } from '../jira.service';
import { transformParentNode, flattenAndTransformNodes } from '../tree-utils';
import * as _ from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';

@Component({
    selector: 'app-purpose',
    templateUrl: './purpose.component.html'
})
export class PurposeComponent implements OnInit {
    title = 'text-matrix';
    keyId = "GBP-35381";
    result: any;
    linkedRecords: any;
    selectedNode: any;
    public zoom = 100;

    selectedIssue: any;
    showDetails = false;

    constructor(public activatedRoute: ActivatedRoute, public router: Router, public jiraService: JiraService) {
    }

    ngOnInit(): void {
        this.activatedRoute.params.pipe(filter(p => p && p["issue"] && p["issue"].length > 0), map(p => p["issue"]))
            .subscribe(issueKey => {
                // TODO: If type == EPIC, ad epic and initiative fields

                this.jiraService.getIssueDetails(issueKey, [], 'epic-details.json')
                    .pipe(filter(p => p !== null && p !== undefined))
                    .subscribe(issuedetails => this.onEpicSelected(issuedetails));
            });
    }

    loadNode(event) {
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

    nodeSelected(event) {
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

    onEpicSelected(issue) {
        this.result = issue;
        this.showDetails = false;
        if (this.result) {
            this.linkedRecords = [transformParentNode(this.result, true)];
        }
    }

    onKeypress(eventArgs) {
        console.log(eventArgs)
    }
}
