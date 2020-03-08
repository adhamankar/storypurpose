import { Component, Output, EventEmitter } from '@angular/core';
import { JiraService } from '../../jira.service';
import * as _ from 'lodash';
import { flattenNodes } from '../../tree-utils';

@Component({
  selector: 'app-epic-list',
  templateUrl: './epiclist.component.html'
})
export class EpicListComponent {
  @Output() epicSelected = new EventEmitter<any>();

  title = 'text-matrix';
  query = "manual";
  result: any;
  filteredIssues: any;

  constructor(public jiraService: JiraService) {
    // this.loadEpics();
  }
  // loadEpics() {
  //   this.jiraService.executeJql("issuetype=epic and project=ignitia and created >= '2019-10-01'") //, 'epic-list.json')
  //     .subscribe((data) => {
  //       this.result = data;
  //       this.filterIssues('');
  //     });
  // }
  filterIssues(query) {
    this.filteredIssues = flattenNodes(this.result.issues);
    if (this.result && this.result.issues && query > '') {
      this.filteredIssues = _.filter(this.filteredIssues,
        (fi) => (fi.key.toUpperCase().includes(query.toUpperCase()) || fi.title.toUpperCase().includes(query.toUpperCase())));
    }
  }

  onEpicSelected = (issue) => this.epicSelected.emit(issue);

}
