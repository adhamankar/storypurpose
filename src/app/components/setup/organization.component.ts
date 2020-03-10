import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JiraService } from '../../jira.service';
import * as _ from 'lodash';
import { PersistenceService } from 'src/app/persistence.service';

@Component({
    selector: 'app-organization',
    templateUrl: './organization.component.html'
})
export class OrganizationComponent implements OnInit {
    @Output() close = new EventEmitter<any>();
    organization: any;
    constructor(public jiraService: JiraService, public persistenceService: PersistenceService) {
    }

    ngOnInit() {
        this.organization = this.persistenceService.getOrganizationDetails() || {};
    }

    onSave() {
        this.persistenceService.setOrganizationDetails(this.organization);
        this.onClose();
    }
    onClose() {
        this.close.emit(true);
    }
    onReset() {
        this.persistenceService.resetOrganizationDetails();
        this.onClose();
    }
}
