import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JiraService } from '../../jira.service';
import * as _ from 'lodash';
import { PersistenceService } from 'src/app/persistence.service';
import { environment } from './../../../environments/environment';

@Component({
    selector: 'app-connection-details',
    templateUrl: './connection-details.component.html'
})
export class ConnectionDetailsComponent implements OnInit {
    @Output() close = new EventEmitter<any>();
    connectionDetails: any;
    allowOfflineMode = false;
    constructor(public jiraService: JiraService, public persistenceService: PersistenceService) {
    }

    ngOnInit() {
        this.connectionDetails = this.persistenceService.getConnectionDetails() || {}
        this.allowOfflineMode = !environment.production;
    }

    onSave() {
        this.connectionDetails.password = btoa(this.connectionDetails.password);
        this.persistenceService.setConnectionDetails(this.connectionDetails);
        this.onClose();
    }
    onClose() {
        this.close.emit(true);
    }

    onReset() {
        this.persistenceService.resetConnectionDetails();
        this.onClose();
    }
}
