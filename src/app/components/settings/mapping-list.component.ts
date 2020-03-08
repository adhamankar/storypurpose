import { Component, Input, OnInit } from '@angular/core';
import * as _ from 'lodash';

@Component({
    selector: 'app-mapping-list',
    templateUrl: './mapping-list.component.html'
})
export class MappingListComponent implements OnInit {
    @Input() list: any;

    ngOnInit(): void {
        if (!this.list) {
            this.list = [];
        }
    }

    add() {
        this.list.push({ name: '', code: '' });
    }
    remove(index) {
        this.list.splice(index, 1);
    }

}