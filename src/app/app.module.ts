import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {TuiAlertModule, TuiButtonModule, TuiDialogModule, TuiRootModule} from "@taiga-ui/core";
import { AuthorizationPageComponent } from './authorization-page/authorization-page.component';
import {ReactiveFormsModule} from "@angular/forms";
import {TuiActiveZoneModule, TuiValidatorModule} from "@taiga-ui/cdk";
import {TuiAccordionModule, TuiInputModule, TuiInputPasswordModule} from '@taiga-ui/kit';
import { SignUpPageComponent } from './sign-up-page/sign-up-page.component';
import {TuiSidebarModule} from '@taiga-ui/addon-mobile';


@NgModule({
  declarations: [
    AppComponent,
    AuthorizationPageComponent,
    SignUpPageComponent
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TuiRootModule,
    TuiAlertModule,
    TuiDialogModule,
    TuiButtonModule,
    TuiValidatorModule,
    TuiInputModule,
    TuiInputPasswordModule,
    TuiSidebarModule,
    TuiActiveZoneModule,
    TuiAccordionModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
