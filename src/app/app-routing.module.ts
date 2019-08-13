import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { AddProjectComponent } from './component/add-project/add-project.component';
import { VeiwSheetsComponent } from './component/veiw-sheets/veiw-sheets.component';
import { RegisterComponent } from './component/register/register.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { ProfilePicComponent } from './component/profile-pic/profile-pic.component';
import { ForgotPasswordComponent } from './component/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './component/reset-password/reset-password.component';
import { DashboardBoxComponent } from './component/dashboard-box/dashboard-box.component';
import { AddFundoosheetComponent } from './component/add-fundoosheet/add-fundoosheet.component';
import { ShowFundoosheetComponent } from './component/show-fundoosheet/show-fundoosheet.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    children:[
      {
        path:'dashboardbox',
        component:DashboardBoxComponent
      }
    ]
  },
  {
    path: 'forgotPassword',
    component: ForgotPasswordComponent
  },
  {
    path: 'resetPassword',
    component: ResetPasswordComponent
  },
  {
    path: 'projects',
    component: AddProjectComponent
  },
  {
    path:'dashboardbox',
    component:DashboardBoxComponent
  },
  {
    path:'fundooSheet',
    component: AddFundoosheetComponent
  },
  {
    path:'showSheets',
    component: ShowFundoosheetComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
