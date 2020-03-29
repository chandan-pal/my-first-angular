import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RestappComponent } from './restapp/restapp.component';
import { DateComponent } from './date/date.component';
import { AppComponent } from './app.component';
import { HeaderComponent } from './view/header/header.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';

const routes: Routes = [
  {path: "dateapp", component: DateComponent},
  {path: "date", redirectTo: "/dateapp", pathMatch: "prefix"},
  {path: "githubapp", component: RestappComponent},
  {path: "nested", component: AppComponent, children: [
    {path:"header", component: HeaderComponent},
    {path:"hello", component: HelloWorldComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
