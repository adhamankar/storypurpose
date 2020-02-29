import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JiraService } from '../jira.service';
import * as _ from 'lodash';

@Component({
    selector: 'app-setup',
    templateUrl: './setup.component.html'
})
export class SetupComponent implements OnInit {
    @Output() close = new EventEmitter<any>();
    connectionDetails: any;
    constructor(public jiraService: JiraService) {

    }

    ngOnInit() {
        const payload = localStorage.getItem('connectionDetails');
        this.connectionDetails = JSON.parse(payload) || {};
    }

    onSave() {
        localStorage.setItem('connectionDetails', JSON.stringify(this.connectionDetails))
        this.onClose();
    }
    onClose() {
        this.close.emit(true);
    }
}
