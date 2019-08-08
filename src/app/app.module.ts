import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { TechRequirementComponent } from "./component/tech-requirement/tech-requirement.component";
import { RegisterComponent } from './component/register/register.component';
import { Material } from './material.module';
<<<<<<< HEAD
import { AddProjectComponent } from './component/add-project/add-project.component';
=======
import { DashboardComponent } from "./component/dashboard/dashboard.component";
>>>>>>> b771c2f87fcf1139e2946cd432ae02eb96054408

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
<<<<<<< HEAD
    AddProjectComponent
=======
    TechRequirementComponent,
    DashboardComponent
>>>>>>> b771c2f87fcf1139e2946cd432ae02eb96054408
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    Material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
