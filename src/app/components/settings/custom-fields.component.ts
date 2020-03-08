import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JiraService } from '../../jira.service';
import * as _ from 'lodash';

@Component({
    selector: 'app-custom-fields',
    templateUrl: './custom-fields.component.html'
})
export class CustomFieldsComponent implements OnInit {
    @Output() close = new EventEmitter<any>();
    customFieldMaping: any;
    constructor(public jiraService: JiraService) {

    }

    ngOnInit() {
        const payload = localStorage.getItem('customFieldMaping');
        this.customFieldMaping = JSON.parse(payload)
            || {
            epicLink: {
                support: false,
                name: 'Epic Link',
                value: ''
            },
            initiative: {
                support: false,
                name: 'Initiative',
                value: ''
            },
            testingFields: {
                support: false,
                list: []
            },
            customFields: {
                support: false,
                list: []
            }
        };
    }

    onSave() {
        localStorage.setItem('customFieldMaping', JSON.stringify(this.customFieldMaping))
        this.onClose();
    }
    onClose() {
        this.close.emit(true);
    }
    onReset() {
        localStorage.removeItem('customFieldMaping');
        this.onClose();
    }
}
