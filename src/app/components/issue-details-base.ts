import { JiraService } from '../jira.service';
import { transformParentNode, flattenAndTransformNodes, populateFieldValues } from '../tree-utils';
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

    public mappedEpicFieldCode: string;
    public relatedEpic: any;
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

            const mappedFields = this.persistenceService.getFieldMapping();
            const extendedFields = [];
            this.mappedEpicFieldCode = '';
            if (mappedFields && mappedFields.epicLink && mappedFields.epicLink.support === true && mappedFields.epicLink.code !== '') {
                this.mappedEpicFieldCode = mappedFields.epicLink.code;
                extendedFields.push(this.mappedEpicFieldCode);
            }

            this.jiraService.getIssueDetails(issueKey, extendedFields, `${issueKey.toLowerCase()}.json`)
                .pipe(filter((p: any) => p !== null && p !== undefined && p.fields))
                .subscribe((issuedetails: any) => {
                    this.relatedEpic = null;
                    let epicKey = (this.mappedEpicFieldCode !== '') ? issuedetails.fields[this.mappedEpicFieldCode] : ''

                    if (epicKey && epicKey.length > 0) {
                        this.jiraService.getIssueDetails(epicKey, [], `${epicKey}.json`)
                            .pipe(filter(p => p !== null && p !== undefined))
                            .subscribe((epicDetails: any) => {
                                this.relatedEpic = populateFieldValues(epicDetails);

                                // Populated after related EPIC is loaded - need to call twice since its a callback
                                console.log('invoking in callback', this.relatedEpic);
                                this.onIssueLoaded(issuedetails);
                            });
                    } else {
                        this.onIssueLoaded(issuedetails);
                    }
                });
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
        this.selectedIssue = { key: event.node.key, label: event.node.label, type: event.node.type };
    }
    canTrackProgress = (node) => (node && (node.type === "Test Suite" || node.type === 'Story'));

    public onIssueLoaded(issue) {
        this.result = issue;
        this.showDetails = false;
        if (this.result) {
            let root = transformParentNode(this.result, this.includeHierarchy);

            if (this.includeHierarchy) {
                root = this.populateEpic(root);
                root = this.populateProjectDescription(root);
                root = this.populateOrganizationDescription(root);

            }

            this.linkedRecords = [root];
        }
    }

    private populateEpic(node) {
        if (node && node.fields) {
            if (this.relatedEpic) {
                return {
                    key: this.relatedEpic.key,
                    label: this.relatedEpic.label,
                    description: this.relatedEpic.description,
                    type: 'Epic',
                    project: this.relatedEpic.project,
                    children: [node],
                    expanded: true
                }
            }
        }
        return node;
    }

    private populateProjectDescription(node: any) {
        if (node.project) {
            node = {
                key: node.project.key,
                title: node.project.name,
                label: node.project.name,
                description: node.project.description,
                type: 'Project',
                children: [
                    node.issueParent
                        ? {
                            key: node.issueParent.key,
                            title: node.issueParent.label,
                            label: node.issueParent.label,
                            type: node.issueParent.type,
                            description: node.issueParent.description,
                            children: [node],
                            expanded: true
                        }
                        : node
                ],
                expanded: true
            };
        }

        const projectDetails: any = this.persistenceService.getProjectDetails(node.key);

        if (projectDetails) {
            node.description = projectDetails.description;
        }
        else {
            this.jiraService.getProjectDetails(node.key, `${node.key}.json`)
                .pipe(filter(p => p !== null && p !== undefined), map((p: any) => {
                    return {
                        key: p.key,
                        name: p.name,
                        description: p.description
                    };
                }))
                .subscribe((projectDetails: any) => {
                    this.persistenceService.setProjectDetails(projectDetails);
                    node.description = projectDetails.description;
                });
        }
        return node;
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
