import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JiraService } from '../../jira.service';
import * as _ from 'lodash';

@Component({
    selector: 'app-connection-details',
    templateUrl: './connection-details.component.html'
})
export class ConnectionDetailsComponent implements OnInit {
    @Output() close = new EventEmitter<any>();
    connectionDetails: any;
    constructor(public jiraService: JiraService) {

    }

    ngOnInit() {
        const payload = localStorage.getItem('connectionDetails');
        this.connectionDetails = JSON.parse(payload) || {};
        if (this.connectionDetails.password) {
            this.connectionDetails.password = atob(this.connectionDetails.password);
        }
    }

    onSave() {
        this.connectionDetails.password = btoa(this.connectionDetails.password);
        localStorage.setItem('connectionDetails', JSON.stringify(this.connectionDetails))
        this.onClose();
    }
    onClose() {
        this.close.emit(true);
    }

    onReset() {
        localStorage.removeItem('connectionDetails');
        this.onClose();
    }
}
