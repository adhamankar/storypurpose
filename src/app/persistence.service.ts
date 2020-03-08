import { Injectable } from '@angular/core';
import * as _ from "lodash";

@Injectable({ providedIn: "root" })
export class PersistenceService {

    getConnectionDetails() {
        const payload = localStorage.getItem('connectionDetails');
        const connectionDetails = JSON.parse(payload);
        if (connectionDetails) {
            connectionDetails.password = atob(connectionDetails.password);
            connectionDetails.encoded = btoa(`${connectionDetails.username}:${connectionDetails.password}`);
        }
        return connectionDetails;
    }
    setConnectionDetails(payload) {
        localStorage.setItem('connectionDetails', JSON.stringify(payload))
    }
    resetConnectionDetails() {
        localStorage.removeItem('connectionDetails');
    }

    getFieldMapping() {
        const payload = localStorage.getItem('FieldMapping');
        return JSON.parse(payload) || {
            initiative: { support: false, name: 'Initiative', value: '' },
            epicLink: { support: false, name: 'Epic Link', value: '' },
            issueTypes: []  // { name: '', list: [] }
        };
    }
    setFieldMapping(payload) {
        localStorage.setItem('FieldMapping', JSON.stringify(payload))
    }
    resetFieldMapping() {
        localStorage.removeItem('FieldMapping');
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

}