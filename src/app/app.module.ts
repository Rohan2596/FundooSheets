import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
import { Material } from './material.module';
import { AddProjectComponent } from './component/add-project/add-project.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddProjectComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    Material
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
