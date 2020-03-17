import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JiraService } from '../../lib/jira.service';
import * as _ from 'lodash';
import { PersistenceService } from 'src/app/lib/persistence.service';
import { environment } from '../../../environments/environment';
import { MessageService } from 'primeng/api';
import { filter } from 'rxjs/operators';

@Component({
    selector: 'app-connection-details',
    templateUrl: './connection-details.component.html'
})
export class ConnectionDetailsComponent implements OnInit {
    @Output() close = new EventEmitter<any>();
    connectionDetails: any;
    allowOfflineMode = false;
    testSuccessful = false;
    constructor(public jiraService: JiraService, public persistenceService: PersistenceService, public messageService: MessageService) {
    }

    ngOnInit() {
        this.connectionDetails = this.persistenceService.getConnectionDetails() || {}
        this.allowOfflineMode = !environment.production;
    }

    canSave() {
        return this.connectionDetails && this.connectionDetails.serverUrl && this.connectionDetails.serverUrl.length > 0
            && this.connectionDetails.username && this.connectionDetails.username.length > 0
            && this.connectionDetails.password && this.connectionDetails.password.length > 0
    }
    onSave() {
        this.connectionDetails.password = btoa(this.connectionDetails.password);
        this.persistenceService.setConnectionDetails(this.connectionDetails);
        this.onClose(true);
    }
    onClose(shouldReload) {
        this.close.emit(shouldReload);
    }

    testConnection() {
        this.jiraService.testConnection(this.connectionDetails)
            .subscribe((result: any) => {
                this.connectionDetails.displayName = result.displayName;
                this.messageService.add({ severity: "success", summary: "Success", detail: "Connection tested successfully", life: 5000, closable: true });
                this.testSuccessful = true;
            });
        // this.messageService.add({ severity: 'error', summary: "Failed", detail: "Connection failed", life: 10000, closable: true });
    }

    onReset() {
        this.persistenceService.resetConnectionDetails();
        this.onClose(true);
    }
}
