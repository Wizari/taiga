import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TuiAlertModule, TuiButtonModule, TuiDialogModule, TuiRootModule} from "@taiga-ui/core";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiAlertModule,
    TuiDialogModule,
    TuiButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
