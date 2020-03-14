import { Injectable } from '@angular/core';
import * as _ from "lodash";

const DataTypes = {
    ConnectionDetails: "connectionDetails",
    Organization: "organization",
    FieldMapping: "FieldMapping",
    Projects: "Projects",
    Initiatives: "Initiatives",
}

@Injectable({ providedIn: "root" })
export class PersistenceService {

    //#region Connectiondetails
    getConnectionDetails() {
        const payload = localStorage.getItem(DataTypes.ConnectionDetails);
        const connectionDetails = JSON.parse(payload);
        if (connectionDetails) {
            connectionDetails.password = atob(connectionDetails.password);
            connectionDetails.encoded = btoa(`${connectionDetails.username}:${connectionDetails.password}`);
        }
        return connectionDetails;
    }
    setConnectionDetails(payload) {
        localStorage.setItem(DataTypes.ConnectionDetails, JSON.stringify(payload))
    }
    resetConnectionDetails() {
        localStorage.removeItem(DataTypes.ConnectionDetails);
    }
    //#endregion

    //#region organization
    getOrganizationDetails() {
        const payload = localStorage.getItem(DataTypes.Organization);
        return JSON.parse(payload);
    }
    setOrganizationDetails(payload) {
        localStorage.setItem(DataTypes.Organization, JSON.stringify(payload))
    }
    resetOrganizationDetails() {
        localStorage.removeItem(DataTypes.Organization);
    }
    //#endregion 

    getFieldMapping() {
        const payload = localStorage.getItem(DataTypes.FieldMapping);
        return JSON.parse(payload) || {
            initiative: { support: false, name: 'Initiative', value: '' },
            epicLink: { support: false, name: 'Epic Link', value: '' },
            issueTypes: []  // { name: '', list: [] }
        };
    }
    setFieldMapping(payload) {
        localStorage.setItem(DataTypes.FieldMapping, JSON.stringify(payload))
    }
    resetFieldMapping() {
        localStorage.removeItem(DataTypes.FieldMapping);
    }

    getExtendedFieldByIssueType(issueType) {
        const customFields = this.getFieldMapping();
        if (customFields && customFields.issueTypes && customFields.issueTypes.length > 0) {
            const node = _.find(customFields.issueTypes, { name: issueType });
            if (node && node.list && node.list.length > 0) {
                return node.list;
            }
        }
        return [];
    }

    //#region Projects
    getProjects() {
        const payload = localStorage.getItem(DataTypes.Projects);
        return JSON.parse(payload) || [];
    }
    resetProjects() {
        localStorage.removeItem(DataTypes.Projects);
    }
    getProjectDetails(keyId) {
        const projects = this.getProjects();
        return _.find(projects, { key: keyId })
    }
    setProjectDetails(payload) {
        const projects = this.getProjects();
        const found = _.find(projects, { key: payload.key })
        if (!found) {
            projects.push(payload);
            localStorage.setItem(DataTypes.Projects, JSON.stringify(projects))
        }
    }
    //#endregion

    //#region Initiatives
    getInitiatives() {
        const payload = localStorage.getItem(DataTypes.Initiatives);
        return JSON.parse(payload) || [];
    }
    resetInitiatives() {
        localStorage.removeItem(DataTypes.Initiatives);
    }
    getInitiativeDetails(keyId) {
        const initiatives = this.getInitiatives();
        return _.find(initiatives, { key: keyId })
    }
    setInitiativeDetails(payload) {
        const initiatives = this.getInitiatives();
        const found = _.find(initiatives, { key: payload.key })
        if (found) {
            found.description = payload.description;
        } else {
            initiatives.push(payload);
        }
        localStorage.setItem(DataTypes.Initiatives, JSON.stringify(initiatives))
    }
    //#endregion
}
