import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JiraService } from '../../jira.service';
import * as _ from 'lodash';
import { PersistenceService } from 'src/app/persistence.service';

@Component({
    selector: 'app-custom-fields',
    templateUrl: './custom-fields.component.html'
})
export class CustomFieldsComponent implements OnInit {
    @Output() close = new EventEmitter<any>();
    customFieldMaping: any;
    constructor(public jiraService: JiraService, public persistenceService: PersistenceService) {

    }

    ngOnInit() {
        this.customFieldMaping = this.persistenceService.getFieldMapping();
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
