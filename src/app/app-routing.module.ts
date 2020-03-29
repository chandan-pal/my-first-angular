import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestappComponent } from './restapp/restapp.component';
import { DateComponent } from './date/date.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: "dateapp", component: DateComponent},
  {path: "date", redirectTo: "/dateapp", pathMatch: "prefix"},
  {path: "githubapp", component: RestappComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
