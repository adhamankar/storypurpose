import { JiraService } from '../lib/jira.service';
import {
    transformParentNode, flattenAndTransformNodes, populateFieldValues,
    findInTree, CustomNodeTypes, isCustomNode, getExtendedFieldValue
} from '../lib/tree-utils';
import * as _ from 'lodash';
import { ActivatedRoute, Router } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { PersistenceService } from '../lib/persistence.service';

export class IssueDetailsBaseComponent {
    public title = 'text-matrix';
    public keyId = "GBP-35381";
    public result: any;
    public treeNodes: any;
    public selectedNode: any;
    public zoom = 100;

    public selectedIssue: any;
    public showDetails = false;
    public includeHierarchy = false;
    public issueKey = "storypurpose";
    public contextIssueKey = "";
    public mappedInitiativeFieldCode: string;
    public mappedEpicFieldCode: string;
    public relatedEpic: any;
    public showOrganizationSetup = false;
    public organizationDetails: any;

    public purpose = [];
    public menulist: any;

    constructor(public router: Router, public activatedRoute: ActivatedRoute, public jiraService: JiraService, public persistenceService: PersistenceService) {
    }

    public initiatize(): void {
        this.menulist = [{
            label: 'Browse', icon: 'fa fa-external-link-alt', command: (event) => {
                if (this.contextIssueKey !== "") {
                    this.router.navigate([this.contextIssueKey]);
                } else {
                    //this.messageService.push("Failed to identify node");
                }
            }
        }]

        this.activatedRoute.params.pipe(
            filter(p => p && p["issue"] && p["issue"].length > 0),
            map(p => p["issue"])
        ).subscribe(issue => {
            this.issueKey = issue;
            const extendedFields = this.getExtendedFields();

            this.jiraService.getIssueDetails(issue, extendedFields, `${issue.toLowerCase()}.json`)
                .pipe(filter((p: any) => p !== null && p !== undefined && p.fields))
                .subscribe((issuedetails: any) => {
                    this.relatedEpic = null;
                    let epicKey = (this.mappedEpicFieldCode !== '') ? issuedetails.fields[this.mappedEpicFieldCode] : ''

                    if (epicKey && epicKey.length > 0) {
                        this.jiraService.getIssueDetails(epicKey, [], `${epicKey}.json`)
                            .pipe(filter(p => p !== null && p !== undefined))
                            .subscribe((epicDetails: any) => {
                                this.relatedEpic = populateFieldValues(epicDetails);
                                this.onIssueLoaded(issuedetails);
                            });
                    } else {
                        this.onIssueLoaded(issuedetails);
                    }
                });
        });
    }

    private getExtendedFields() {
        const mappedFields = this.persistenceService.getFieldMapping();
        const extendedFields = [];
        this.mappedInitiativeFieldCode = '';
        if (mappedFields && mappedFields.initiative && mappedFields.initiative.support === true && mappedFields.initiative.code !== '') {
            this.mappedInitiativeFieldCode = mappedFields.initiative.code;
            extendedFields.push(this.mappedInitiativeFieldCode);
        }
        this.mappedEpicFieldCode = '';
        if (mappedFields && mappedFields.epicLink && mappedFields.epicLink.support === true && mappedFields.epicLink.code !== '') {
            this.mappedEpicFieldCode = mappedFields.epicLink.code;
            extendedFields.push(this.mappedEpicFieldCode);
        }
        return extendedFields;
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
        this.markIssueSelected(event.node);
    }
    nodeContextMenuSelect(args, contextMenu) {
        console.log(args.type, args.key, this.issueKey);
        if (args && (args.key.toLowerCase() === this.issueKey.toLowerCase() || isCustomNode(args) === true)) {
            this.contextIssueKey = "";
            contextMenu.hide();
        } else {
            this.contextIssueKey = args.key;
        }
    }

    private markIssueSelected(node: any) {
        this.purpose = [];
        this.populatePurpose(node);
        _.reverse(this.purpose);
        this.selectedIssue = { key: node.key, label: node.label, type: node.type };
    }

    canTrackProgress = (node) => (node && (node.type === CustomNodeTypes.TestSuite || node.type === CustomNodeTypes.Story));

    public onIssueLoaded(issue) {
        this.result = issue;
        this.showDetails = false;
        if (this.result) {
            let node = transformParentNode(this.result, this.includeHierarchy);
            if (this.includeHierarchy) {
                const projectNode = this.createProjectNode(node);
                const initiativeNode: any = this.createInitiativeNode(node);
                const organizationNode = this.createOrganizationNode();
                node = this.populateEpic(node);
                node = this.createParentNode(initiativeNode, node);
                node = this.createParentNode(projectNode, node);
                node = this.createParentNode(organizationNode, node);
            }
            this.treeNodes = [node];

            const issueToMarkSelected = findInTree(node, this.result.key);
            if (issueToMarkSelected) {
                this.markIssueSelected(issueToMarkSelected);
            }
        }
    }

    private createParentNode(parentNode, node) {
        if (parentNode) {
            parentNode.children = parentNode.children || [];
            parentNode.children.push(node);
            return parentNode;
        }
        return node;
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

    private createInitiativeNode(node: any) {
        const value = getExtendedFieldValue(node, this.mappedInitiativeFieldCode);
        if (value.length > 0) {
            const initiativeNode = {
                key: value,
                title: value,
                label: value,
                description: '',
                type: CustomNodeTypes.Initiative,
                expanded: true
            };

            const details: any = this.persistenceService.getInitiativeDetails(initiativeNode.key);
            if (details) {
                initiativeNode.description = details.purpose;
            }
            return initiativeNode;
        }
        return null;
    }

    private createProjectNode(node: any) {
        if (node.project) {
            node = {
                key: node.project.key,
                title: node.project.name,
                label: node.project.name,
                description: node.project.description,
                type: CustomNodeTypes.Project,
                expanded: true
            };

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
        }
        return node;
    }

    public createOrganizationNode() {
        this.organizationDetails = this.persistenceService.getOrganizationDetails();
        if (this.organizationDetails) {
            return {
                key: this.organizationDetails.name,
                title: this.organizationDetails.name,
                label: this.organizationDetails.name,
                description: this.organizationDetails.purpose,
                type: CustomNodeTypes.Organization,
                expanded: true
            }
        }
        return null;
    }

    public populatePurpose(node) {
        if (node) {
            if (node.type !== 'epic-children' && node.type !== 'Inward' && node.type !== 'Outward') {
                this.purpose.push({ key: node.key, type: node.type, title: node.label, purpose: node.description });
            }
            if (node.parent) {
                this.populatePurpose(node.parent);
            }
        }
    }
}
