import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { Material } from './material.module';
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { FlexLayoutModule } from "@angular/flex-layout";
import { VeiwSheetsComponent } from './component/veiw-sheets/veiw-sheets.component';
import { ForgotPasswordComponent } from "./component/forgot-password/forgot-password.component";
import { ResetPasswordComponent } from "./component/reset-password/reset-password.component";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    VeiwSheetsComponent,
    DashboardComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    Material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
