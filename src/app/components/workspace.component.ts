import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import * as _ from 'lodash';
import { PersistenceService } from '../lib/persistence.service';
import { Router, ActivatedRoute } from '@angular/router';
import { filter, first } from 'rxjs/operators';
import { SharedDatatype, DataService } from '../lib/data.service';
import { Subscription } from 'rxjs';

@Component({
    selector: 'app-workspace',
    templateUrl: './workspace.component.html'
})
export class WorkspaceComponent implements OnInit {
    public connectionDetails: any;

    constructor(public persistenceService: PersistenceService, public dataService: DataService) {
    }

    ngOnInit() {
        this.connectionDetails = this.persistenceService.getConnectionDetails();
    }
    onShowSetup() {
        this.dataService.updateSharedData(SharedDatatype.ConnectionDetails, true);
    }
}
