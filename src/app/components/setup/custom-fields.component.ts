import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JiraService } from '../../lib/jira.service';
import * as _ from 'lodash';
import { PersistenceService } from 'src/app/lib/persistence.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
    selector: 'app-custom-fields',
    templateUrl: './custom-fields.component.html'
})
export class CustomFieldsComponent implements OnInit {
    @Output() close = new EventEmitter<any>();
    customFieldMaping: any;

    configurations: any;
    downloadJsonHref: any;

    constructor(public jiraService: JiraService, public persistenceService: PersistenceService, public sanitizer: DomSanitizer) {

    }

    ngOnInit() {
        this.customFieldMaping = this.persistenceService.getFieldMapping();

        this.configurations = {};
        this.configurations.connectionDetails = this.persistenceService.getConnectionDetails() || {};
        this.configurations.connectionDetails.password = null;
        this.configurations.connectionDetails.username = null;
        this.configurations.connectionDetails.encoded = undefined;
        this.configurations.connectionDetails.offlineMode = undefined;

        this.configurations.fieldMapping = this.customFieldMaping;
        this.configurations.organizationDetails = this.persistenceService.getOrganizationDetails() || {};

        this.generateDownloadJsonUri();
    }

    generateDownloadJsonUri() {
        var theJSON = JSON.stringify(this.configurations);
        var uri = this.sanitizer.bypassSecurityTrustUrl("data:text/json;charset=UTF-8," + encodeURIComponent(theJSON));
        this.downloadJsonHref = uri;
    }

    addIssueTypeConfiguration() {
        this.customFieldMaping.issueTypes.push({ name: '', list: [] });
    }
    removeIssueTypeConfiguration(index) {
        this.customFieldMaping.issueTypes.splice(index, 1);
    }

    onSave() {
        this.persistenceService.setFieldMapping(this.customFieldMaping);
        this.onClose();
    }
    onClose() {
        this.close.emit(true);
    }
    onReset() {
        this.persistenceService.resetFieldMapping();
        this.onClose();
    }
}
