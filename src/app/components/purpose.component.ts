import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { isExtendibleNode, CustomNodeTypes } from '../lib/tree-utils';
import * as _ from "lodash";
import { PersistenceService } from '../lib/persistence.service';
import { DataService, SharedDatatype } from '../lib/data.service';
import { Subscription } from 'rxjs';
import { withLatestFrom } from 'rxjs/operators';

@Component({
    selector: 'app-purpose',
    templateUrl: './purpose.component.html'
})
export class PurposeComponent implements OnInit, OnDestroy {
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

    public subscription: Subscription;

    constructor(public persistenceService: PersistenceService, private dataService: DataService) {
        this.organizationPurpose = this.persistenceService.getOrganizationDetails();

        this.subscription = this.dataService.getSharedData(SharedDatatype.Purpose)
            .pipe(withLatestFrom(p => p))
            .subscribe(data => this.purpose = data)
    }
    ngOnInit(): void {
    }
    ngOnDestroy(): void {
        this.subscription.unsubscribe();
    }

    canExtend = (item) => isExtendibleNode(item);

    onEdit(item) {
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
