import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { Material } from './material.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AddProjectComponent } from './component/add-project/add-project.component';
import { AddProjectdialogBoxComponent } from './component/add-projectdialog-box/add-projectdialog-box.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { VeiwSheetsComponent } from './component/veiw-sheets/veiw-sheets.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { DashboardBoxComponent } from "./component/dashboard-box/dashboard-box.component";
import { ToolbarComponent } from "./component/toolbar/toolbar.component";
import { AddFundoosheetComponent } from "./component/add-fundoosheet/add-fundoosheet.component";
import { ShowFundoosheetComponent } from "./component/show-fundoosheet/show-fundoosheet.component";
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AddProjectComponent,
    AddProjectdialogBoxComponent,
    VeiwSheetsComponent,
    DashboardComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    DashboardBoxComponent,
    ToolbarComponent,
    AddFundoosheetComponent,
    ShowFundoosheetComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    Material
  ],
  providers: [],
  entryComponents : [AddProjectdialogBoxComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
