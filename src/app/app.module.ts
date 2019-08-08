import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './component/login/login.component';
import { RegisterComponent } from './component/register/register.component';
<<<<<<< HEAD
import { TechRequirementComponent } from './component/tech-requirement/tech-requirement.component';
=======
import { Material } from './material.module';
>>>>>>> 3049177aa950405fa0a4de24a2ab38c9c72fcd49

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    TechRequirementComponent
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
