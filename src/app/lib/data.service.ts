import { Injectable } from '@angular/core';
import * as _ from "lodash";
import { Subject, Observable, BehaviorSubject } from 'rxjs';

export const SharedDatatype = {
  Purpose: 'Purpose',
  RecentlyVisited: 'RecentlyVisited',
  ConnectionDetails: 'ConnectionDetails'
}

@Injectable({ providedIn: "root" })
export class DataService {
  private sharedDataCache: { [label: string]: BehaviorSubject<any> } = {};

  getSharedData(label): BehaviorSubject<any> {
    this.sharedDataCache[label] = this.sharedDataCache[label] || new BehaviorSubject<any>(null);
    return this.sharedDataCache[label];
  }
  updateSharedData(label, data) {
    this.getSharedData(label).next(data);
  }
}