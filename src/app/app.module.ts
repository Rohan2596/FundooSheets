import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { Material } from './material.module';
import { DashboardComponent } from "./component/dashboard/dashboard.component";
import { AddProjectComponent } from './component/add-project/add-project.component';
import { AddProjectdialogBoxComponent } from './component/add-projectdialog-box/add-projectdialog-box.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    AddProjectComponent,
    AddProjectdialogBoxComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    Material
  ],
  providers: [],
  entryComponents : [AddProjectdialogBoxComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
