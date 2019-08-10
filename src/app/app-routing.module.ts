import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { AddProjectComponent } from './component/add-project/add-project.component';

import { VeiwSheetsComponent } from './component/veiw-sheets/veiw-sheets.component';

import { RegisterComponent } from './component/register/register.component';

import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProfilePicComponent } from './component/profile-pic/profile-pic.component';


const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path : 'addProject',
    component : AddProjectComponent
  },
  {
    path: 'register',
    component : RegisterComponent},
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
