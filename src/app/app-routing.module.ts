import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found.component';
import { IssueviewerComponent } from './components/issueviewer.component';
import { AboutComponent } from './components/help/about.component';


const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: 'for/:issue', component: IssueviewerComponent },
  { path: '', redirectTo: '/about', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
