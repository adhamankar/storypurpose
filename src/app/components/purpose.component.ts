import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { isExtendibleNode, CustomNodeTypes } from '../lib/tree-utils';
import * as _ from "lodash";
import { PersistenceService } from '../lib/persistence.service';
@Component({
    selector: 'app-purpose',
    templateUrl: './purpose.component.html'
})
export class PurposeComponent implements OnInit {
    _purpose: any;
    @Input()
    set purpose(value: any) {
        this._purpose = value;
    }
    get purpose(): any {
        return this._purpose;
    }

    @Output() edit = new EventEmitter<any>();

    public showOrganizationSetup = false;
    public organizationPurpose: any;

    public showInitiativeSetup = false;
    public initiativePurpose: any;

    constructor(public persistenceService: PersistenceService) {
    }
    ngOnInit(): void {
        this.organizationPurpose = this.persistenceService.getOrganizationDetails();
    }

    canExtend = (item) => isExtendibleNode(item);

    onEdit(item) {
        console.log(item);
        if (item.type === CustomNodeTypes.Organization) {
            this.showOrganizationSetup = true;
        }
        if (item.type === CustomNodeTypes.Initiative) {
            this.initiativePurpose = item;
            this.showInitiativeSetup = true;
        }
        this.edit.emit(item);
    }

    public setupOrganization() {
        this.showOrganizationSetup = true;
    }
    setupCompleted(shouldReload) {
        if (shouldReload) {
            window.location.reload();
        }
    }

}
