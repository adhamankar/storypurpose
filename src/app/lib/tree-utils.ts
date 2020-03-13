import * as _ from 'lodash';

export const CustomNodeTypes = {
    EpicChildren: "epic-children",
    InwardLink: "Inward",
    OutwardLink: "Outward",
    Project: "Project",
    Initiative: "Initiative",
    Organization: "Organization",
    TestSuite: "Test Suite",
    Story: "Story"
};
export function isCustomNode(args) {
    return args.type === CustomNodeTypes.EpicChildren || args.type === CustomNodeTypes.InwardLink || args.type === CustomNodeTypes.OutwardLink
        || args.type === CustomNodeTypes.Organization || args.type === CustomNodeTypes.Project || args.type === CustomNodeTypes.Initiative
}

export function isExtendibleNode(args) {
    return args.type === CustomNodeTypes.Organization || args.type === CustomNodeTypes.Initiative
}


export function populateFieldValues(node) {
    if (node && node.fields) {
        node.project = node.fields.project;
        node.issueParent = populateFieldValues(node.fields.parent);
        node.type = node.fields.issuetype ? node.fields.issuetype.name : 'unknown';
        node.status = node.fields.status ? node.fields.status.name : 'unknown';
        node.label = node.fields.summary;
        node.description = node.fields.description;
    }
    return node;
}

export function appendExtendedFields(flattenedNodes, extendedFields) {
    if (flattenedNodes) {
        _.forEach(flattenedNodes, element => {
            element.extendedFields = _.filter(
                _.map(extendedFields, (ef) => { return { name: ef.name, value: getExtendedFieldValue(element.issue, ef.code) } }),
                (ef) => ef && ef.value !== '')
        });
    }
}
export function getExtendedFieldValue(issue, code) {
    if (!issue || !issue.fields) return '';

    const field = issue.fields[code];
    if (!field) return '';

    return (typeof field === 'object') ? field.value : field;
}

export function flattenNodes(issues) {
    return _.map(issues, (item) => {
        populateFieldValues(item);
        const node = {
            key: item.key,
            title: item.fields.summary,
            label: item.fields.summary,
            type: item.type,
            status: item.status,
            project: item.project,
            issueParent: item.issueParent,
            issue: item
        };
        return node;
    });
}

export function flattenAndTransformNodes(issues) {
    return _.map(issues, (item) => transformParentNode(item, false));
}
export function transformToTreenode(node, issueLinks) {
    if (!node.type) {
        populateFieldValues(node);
    }

    if (issueLinks && issueLinks.length > 0) {
        node.children = issueLinks;
        node.expanded = true;
    }
    return node;
}

export function transformParentNode(node, buildHeirarchy) {
    if (!node.type) {
        populateFieldValues(node);
    }

    let level1Nodes: any = [];
    if (node.type === "Epic") {
        level1Nodes.push({ "label": 'Epic Children', key: 'E_' + node.key, parentId: node.key, selectable: false, type: CustomNodeTypes.EpicChildren, leaf: false, children: null });
    }
    let issueLinks = buildIssueLinks(node);
    if (issueLinks && issueLinks.length > 0) {
        level1Nodes = _.concat(level1Nodes, issueLinks);
    }

    return transformToTreenode(node, level1Nodes);
}

function buildIssueLinks(node: any) {
    if (node && node.fields && node.fields.issuelinks && node.fields.issuelinks.length > 0) {
        const issueLinks: any = [];
        const inwardIssues = _.filter(node.fields.issuelinks, (il) => il.inwardIssue);
        if (inwardIssues && inwardIssues.length > 0) {
            issueLinks.push({
                "label": `Inward links (${inwardIssues.length})`, key: 'IW_' + node.key, parentId: node.key,
                selectable: false, type: CustomNodeTypes.InwardLink,
                "children": _.map(inwardIssues, (il) => populateFieldValues(il.inwardIssue)),
                expanded: false
            });
        }
        const outwardIssues = _.filter(node.fields.issuelinks, (il) => il.outwardIssue);
        if (outwardIssues && outwardIssues.length > 0) {
            issueLinks.push({
                "label": `Outward links (${outwardIssues.length})`, key: 'OW_' + node.key, parentId: node.key,
                selectable: false, type: CustomNodeTypes.OutwardLink,
                "children": _.map(outwardIssues, (il) => populateFieldValues(il.outwardIssue)),
                expanded: false
            });
        }
        return issueLinks;
    }
    return null;
}

export function findInTree(node, key) {
    if (node) {
        if (node.key.toLowerCase() === key.toLowerCase()) return node;

        if (node.children) {
            node.children.forEach((cn) => node = findInTree(cn, key));
        }
    }
    return node;
}