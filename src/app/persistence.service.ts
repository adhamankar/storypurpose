import { Injectable } from '@angular/core';

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
            epicLink: { support: false, name: 'Epic Link', value: '' },
            initiative: { support: false, name: 'Initiative', value: '' },
            testingFields: { support: false, list: [] },
            customFields: { support: false, list: [] }
        };

    }
    setFieldMapping(payload) {
        localStorage.setItem('FieldMapping', JSON.stringify(payload))
    }
    resetFieldMapping() {
        localStorage.removeItem('FieldMapping');
    }

}