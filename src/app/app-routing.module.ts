import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { IssueviewerComponent } from './components/issueviewer.component';
import { AboutComponent } from './components/help/about.component';
import { WorkspaceComponent } from './components/workspace.component';
import { ConnectionDetailsComponent } from './components/setup/connection-details.component';
import { PurposeComponent } from './components/purpose.component';
import { SubDetailsComponent } from './components/sub-details.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  {
    path: 'for', component: WorkspaceComponent, children: [
      {
        path: ':issue', component: IssueviewerComponent, children: [
          { path: 'sub', component: SubDetailsComponent },
          { path: 'purpose', component: PurposeComponent },
          { path: '', component: PurposeComponent, pathMatch: 'full' }
        ]
      },
      { path: '', component: PageNotFoundComponent, pathMatch: 'full' }
    ]
  },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
