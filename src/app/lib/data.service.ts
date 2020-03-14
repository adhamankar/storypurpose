import { Injectable } from '@angular/core';
import * as _ from "lodash";
import { Subject, Observable } from 'rxjs';

export const SharedDatatype = {
  Purpose: 'Purpose',
  RecentlyVisited: 'RecentlyVisited',
  ConnectionDetails: 'ConnectionDetails'
}

@Injectable({ providedIn: "root" })
export class DataService {
  private sharedDataCache: { [label: string]: Subject<any> } = {};

  getSharedData(label): Subject<any> {
    this.sharedDataCache[label] = this.sharedDataCache[label] || new Subject<any>();
    return this.sharedDataCache[label];
  }
  updateSharedData(label, data) {
    this.getSharedData(label).next(data);
  }
}