import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { JiraService } from '../../lib/jira.service';
import * as _ from 'lodash';
import { PersistenceService } from 'src/app/lib/persistence.service';

@Component({
    selector: 'app-hierarchy-field',
    templateUrl: './hierarchy-field.component.html'
})
export class HierarchyFieldEditorComponent implements OnInit {
    @Output() close = new EventEmitter<any>();
    @Input() hierarchyField: any;
    constructor(public jiraService: JiraService, public persistenceService: PersistenceService) {
    }
    ngOnInit(): void {
    }

    onSave() {
        this.persistenceService.setHierarchyFieldDetails(this.hierarchyField);
        this.onClose(true);
    }
    onClose(shouldReload) {
        this.close.emit(shouldReload);
    }
    onReset() {
        // this.persistenceService.resetInitiatives();
        this.onClose(false);
    }
}
