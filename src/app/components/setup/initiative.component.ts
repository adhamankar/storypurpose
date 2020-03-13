import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { JiraService } from '../../lib/jira.service';
import * as _ from 'lodash';
import { PersistenceService } from 'src/app/lib/persistence.service';

@Component({
    selector: 'app-initiative',
    templateUrl: './initiative.component.html'
})
export class InitiativeComponent {
    @Output() close = new EventEmitter<any>();
    @Input() initiative: any;
    constructor(public jiraService: JiraService, public persistenceService: PersistenceService) {
    }

    onSave() {
        this.persistenceService.setInitiativeDetails(this.initiative);
        this.onClose();
    }
    onClose() {
        this.close.emit(true);
    }
    onReset() {
        this.persistenceService.resetInitiatives();
        this.onClose();
    }
}
