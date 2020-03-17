import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PersistenceService } from './persistence.service';
import * as _ from "lodash";

@Injectable({ providedIn: "root" })
export class JiraService {
    connectionDetails: any;
    proxyurl = "https://cors-anywhere.herokuapp.com";
    baseUrl = "https://jira.mediaocean.com";
    restVersionEndpoint = "/rest/api/latest";
    fieldList = ['project', 'reporter', 'assignee', 'status', 'summary', 'description', 'key', 'components', 'labels', 'issuelinks', 'issuetype', 'parent'];
    httpOptions: any;

    staticFileLocation = './staticfiles';
    constructor(private http: HttpClient, public persistenceService: PersistenceService) {
        this.connectionDetails = persistenceService.getConnectionDetails();
        if (this.connectionDetails) {
            this.baseUrl = `${this.connectionDetails.serverUrl}${this.restVersionEndpoint}`;

            this.httpOptions = {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${this.connectionDetails.encoded}`
                })
            };
        }
    }

    testConnection(connectionDetails) {
        return this.http.get(`${this.proxyurl}/${connectionDetails.serverUrl}${this.restVersionEndpoint}/myself`,
            {
                headers: new HttpHeaders({
                    'Content-Type': 'application/json',
                    'Authorization': `Basic ${this.persistenceService.encodeCredentials(connectionDetails)}`
                })
            });
    }
    getIssueDetails(keyId, extendedFields = [], srcJson = null) {
        if (this.connectionDetails && this.connectionDetails.offlineMode && srcJson && srcJson.length > 0) {
            return this.http.get(`${this.staticFileLocation}/${srcJson.toLowerCase()}`, this.httpOptions)
        }
        const fieldCodes = _.join(_.concat(this.fieldList, extendedFields));
        const url = `issue/${keyId}?fields=${fieldCodes}`;
        return this.http.get(`${this.proxyurl}/${this.baseUrl}/${url}`, this.httpOptions);
    }
    getProjectDetails(projectKey, srcJson = null) {
        if (this.connectionDetails && this.connectionDetails.offlineMode && srcJson && srcJson.length > 0) {
            return this.http.get(`${this.staticFileLocation}/project-${srcJson}`, this.httpOptions)
        }
        const url = `project/${projectKey}`;
        return this.http.get(`${this.proxyurl}/${this.baseUrl}/${url}`, this.httpOptions);
    }

    executeJql(jql, extendedFields = [], srcJson = null) {
        if (this.connectionDetails && this.connectionDetails.offlineMode && srcJson && srcJson.length > 0) {
            return this.http.get(`${this.staticFileLocation}/${srcJson}`, this.httpOptions)
        }
        const fieldCodes = _.join(_.concat(this.fieldList, extendedFields));
        const url = `search?jql=${jql}&fields=${fieldCodes}`;
        return this.http.get(`${this.proxyurl}/${this.baseUrl}/${url}`, this.httpOptions);
    }
}
