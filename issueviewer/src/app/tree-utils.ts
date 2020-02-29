import * as _ from 'lodash';

function populateFieldValues(node) {
    node.type = node.fields && node.fields.issuetype ? node.fields.issuetype.name : 'default';
    node.status = node.fields && node.fields.status ? node.fields.status.name : 'unknown';
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
            issue: item
        };
        return node;
    });
}

export function flattenAndTransformNodes(issues) {
    return _.map(issues, (item) => {
        return transformParentNode(item);
    });
}
export function transformToTreenode(node, issueLinks) {
    if (!node.type) {
        populateFieldValues(node);
    }
    const newNode: any = { "label": node.fields.summary, "key": node.key, "type": node.type, "status": node.status }
    if (issueLinks && issueLinks.length > 0) {
        newNode.children = issueLinks;
        newNode.expanded = true;
    }
    return newNode;
}

export function transformParentNode(node) {
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
    const root: any = transformToTreenode(node, level1Nodes);
    return root;
}

