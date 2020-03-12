import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { JiraService } from '../lib/jira.service';
import * as _ from 'lodash';

@Component({
    selector: 'app-page-not-found',
    templateUrl: './page-not-found.component.html'
})
export class PageNotFoundComponent {
}