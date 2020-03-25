import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { DateComponent } from './date/date.component';
import { AddressCardComponent } from './address-card/address-card.component';
import { ViewModule } from './view/view.module';
import { DateService } from './date.service';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    DateComponent,
    AddressCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ViewModule
  ],
  providers: [DateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
