import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { PurposeComponent } from './components/purpose.component';
import { IssueviewerComponent } from './components/issueviewer.component';


const routes: Routes = [
  { path: 'purpose/:issue', component: PurposeComponent },
  { path: ':issue', component: IssueviewerComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
