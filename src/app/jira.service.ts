import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({ providedIn: "root" })
export class JiraService {
    connectionDetails: any;
    proxyurl = "https://cors-anywhere.herokuapp.com";
    baseUrl = "https://jira.mediaocean.com/rest/api/latest";
    fieldList = "fields=project,reporter,assignee,status,summary,description,key,components,labels,issuelinks,issuetype";
    httpOptions: any;

    constructor(private http: HttpClient) {
        const payload = localStorage.getItem('connectionDetails');
        this.connectionDetails = JSON.parse(payload);
        if (this.connectionDetails) {
            this.baseUrl = this.connectionDetails.serverUrl;
            this.connectionDetails.password = atob(this.connectionDetails.password);
            this.connectionDetails.encoded = btoa(`${this.connectionDetails.username}:${this.connectionDetails.password}`);

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
