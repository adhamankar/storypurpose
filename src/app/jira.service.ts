import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PersistenceService } from './persistence.service';

@Injectable({ providedIn: "root" })
export class JiraService {
    connectionDetails: any;
    proxyurl = "https://cors-anywhere.herokuapp.com";
    baseUrl = "https://jira.mediaocean.com";
    restVersionEndpoint = "/rest/api/latest";
    fieldList = "fields=project,reporter,assignee,status,summary,description,key,components,labels,issuelinks,issuetype";
    httpOptions: any;

    constructor(private http: HttpClient, persistenceService: PersistenceService) {
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

    getIssueDetails(keyId, srcJson = null) {
        if (this.connectionDetails && this.connectionDetails.offlineMode && srcJson && srcJson.length > 0) {
            return this.http.get(`assets/${srcJson}`, this.httpOptions)
        }
        const url = `issue/${keyId}?${this.fieldList}`;
        return this.http.get(`${this.proxyurl}/${this.baseUrl}/${url}`, this.httpOptions);

    }

    executeJql(jql, srcJson = null) {
        if (this.connectionDetails && this.connectionDetails.offlineMode && srcJson && srcJson.length > 0) {
            return this.http.get(`assets/${srcJson}`, this.httpOptions)
        }

        const url = `search?jql=${jql}&${this.fieldList}`;
        return this.http.get(`${this.proxyurl}/${this.baseUrl}/${url}`, this.httpOptions);
    }
}
