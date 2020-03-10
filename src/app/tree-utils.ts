import * as _ from 'lodash';

function populateFieldValues(node) {
    if (node && node.fields) {
        node.project = node.fields.project;
        node.issueParent = populateFieldValues(node.fields.parent);
        node.type = node.fields.issuetype ? node.fields.issuetype.name : 'unknown';
        node.status = node.fields.status ? node.fields.status.name : 'unknown';
        node.label = node.fields.summary;
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
function getExtendedFieldValue(issue, code) {
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
    let issueLinks = (node.fields && node.fields.issuelinks)
        ? _.map(node.fields.issuelinks, (il) => transformToTreenode(il.outwardIssue ? il.outwardIssue : il.inwardIssue, null))
        : null;

    let level1Nodes: any = [];
    if (node.type === "Epic") {
        level1Nodes.push({ "label": 'Epic Children', key: 'E_' + node.key, parentId: node.key, selectable: false, type: "epic-children", leaf: false, children: null });
    }
    if (issueLinks && issueLinks.length > 0) {
        if (level1Nodes.length == 0) {
            level1Nodes = issueLinks;
        } else {
            level1Nodes.push({ "label": 'Linked records', "children": issueLinks, key: 'L_' + node.key, parentId: node.key, selectable: false, type: "linked-records", leaf: !(issueLinks && issueLinks.length > 0) });
        }
    }
    let root = transformToTreenode(node, level1Nodes);
    if (buildHeirarchy && node.project) {
        root = {
            key: node.project.key,
            title: node.project.name,
            label: node.project.name,
            type: 'project',
            children: [
                node.issueParent
                    ? {
                        key: node.issueParent.key,
                        title: node.issueParent.label,
                        label: node.issueParent.label,
                        type: node.issueParent.type,
                        children: [root],
                        expanded: true
                    }
                    : root
            ],
            expanded: true
        };
    }
    return root;
}
